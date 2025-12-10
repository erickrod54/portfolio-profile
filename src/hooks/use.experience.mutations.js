import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addExperience, deleteExperience } from "../../api/resume_api";

/**Portfolio-erick - version 56.06 - useExperience  -
* Features:

    --> Building 'useExperience' mutations
 
* Notes: Migrating styled components
**/

//The key TanStack Query uses to identify my resume data in the cache
const RESUME_QUERY_KEY = ['resumeData'];

//Hooks for adding New Experience ( POST )
export function useAddExperience() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addExperience,

        //Optimistic Update Logic for adding OTem
        onMutate: async (newExperience) => {
            // Cancel any outgoing refetches to prevent overwriting the optimistic updated
            await queryClient.cancelQueries({ queryKey: RESUME_QUERY_KEY })

            // Snapshot the previous data before the modification
            const previousResumeData = queryClient.getQueryData(RESUME_QUERY_KEY);

            //optimiscally update the cache: add the new experience item
            if (previousResumeData) {
                queryClient.setQueryData(RESUME_QUERY_KEY, (oldData) => {
                    // use temporary id for the optimistic item until the 
                    //server provides a real one

                    const tempId = Date.now();
                    const experienceWithTempId = { ...newExperience, tempId }
                    
                    return {
                        ...oldData,
                        //Append the new experience array 
                        experience:[ ...(oldData.experience || []), experienceWithTempId],    
                    }
                })
            }
            // Return the snapshot for use in case of error(rollback)
            return {previousResumeData}
        },
        // if the mutation fails, use the context to roll back the optimistic update
        onError: (err, newExperience, context) => {
            if (context?.previousResumeData) {
                queryClient.setQueryData(RESUME_QUERY_KEY, context.previousResumeData);
                console.error('failed to add experience, rolled back:', err)
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: RESUME_QUERY_KEY})
        }
    })
}

// hook for deleting experience
export function useDeleteExperience() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteExperience,

        //optimistic update logic for deleting an item
        onMutate: async (indexToDelete) => {
            await queryClient.cancelQueries({ queryKey: RESUME_QUERY_KEY });
            const previousResumeData = queryClient.getQueryData(RESUME_QUERY_KEY);
        
           // INSIDE useDeleteExperience, onMutate:
            if (previousResumeData) {
                //Use setQueryData to update the cache
                queryClient.setQueryData(RESUME_QUERY_KEY, (oldData) => { 
                    const newExperienceArray = [...(oldData.experience || [])]
                    // ... deletion logic ...
                    newExperienceArray.splice(indexToDelete, 1);

                    return {
                        ...oldData,
                        experience: newExperienceArray
                    };
                });
            }
            return { previousResumeData };
        },       

        //Rollback logic for delete
        onError: (err, indexToDelete, context) => {
            if (context?.previousResumeData) {
                queryClient.setQueryData(RESUME_QUERY_KEY, context.previousResumeData)
                console.error('failed to delete experience, rolled back', err)
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({queryKey: RESUME_QUERY_KEY})
        }
    })
}