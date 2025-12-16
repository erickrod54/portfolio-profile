import React from 'react';
import { CardDashboard, CardDashboardContent, CardDashboardHeader, CardTitleHeader } from './card.dashboard.component';
import { Separator } from './separator.ui.dashboard.component';
import { FileText, LayoutDashboard } from 'lucide-react';
import ExperienceEditor from './experience.editor.component';
import { Link } from 'wouter';
import SummaryEditor from './summary.editor.component';
import PersonalDetailsEditor from './personal.details.editor.component';
import SkillsEditor from './skills.editor.component';
import { useQuery } from '@tanstack/react-query';
import { fetchResumeData } from '../../api/resume_api';
import EducationEditor from './education.editor.component';
import { loadingVariants } from './ui-components/ui.index.components';

/**Portfolio-erick - version 56.12 - DashboardLayout -
* Features:

    -→> Removing 'LoadingDiv', and using variants 

* Notes: UI components scalable for the dashboard component
**/

export default function DashboardLayout() {

    // 1. Fetch the data
const { data: resume, isLoading, error } = useQuery({ 
    queryKey: ['resumeData'], 
    queryFn: fetchResumeData 
});

    // 2. Handle the "Loading" state
    //as the first loading div has no variant will be the base styles
    if (isLoading) return <div className={loadingVariants() }>Loading Resume Data...</div>;
    if (error) return <div className={ loadingVariants( { variant: 'error' })}>Error loading data!</div>;
    return (
        // Main container that establishes the flex layout for sidebar and main content
        <div className='min-h-screen bg-gray-50 flex'> 
            
            {/* 1. Sidebar (Fixed width, sticky) */}
            <aside className='w-64 bg-white border-r p-4 shadow-xl sticky top-0 h-screen'>
                <h1 className='text-2xl font-extrabold text-blue-700 mb-8'>Erick's Dashboard</h1>
                <nav className='space-y-2'>
                    {/**Active Navigation Item (Added active styling) */}
                    <Link href='/dashboard' className='flex items-center space-x-3 p-3 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md transition duration-150'>
                        <LayoutDashboard className='w-5 h-5' />
                        <span className='text-white'>Dashboard Overview</span>
                    </Link>
                    {/**Other navigation items */}
                    <Link href='#' className='flex items-center space-x-3 p-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg'>
                        <FileText className='w-5 h-5' />
                        <span>Profile Settings</span>
                    </Link>
                </nav>
            </aside>
            
            {/* 2. Main Content Area (MUST be outside the <aside> tag) */}
            <main className='flex-1 p-8'>
                <h1 className='text-3xl font-bold mb-6 text-gray-900'>
                    Resume & Data Management
                </h1>

                {/**custom separator component */}
                <Separator className='mb-8' />
                
                {/**Dashboard Grid Structure (2 columns for the editor) */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {/** Column 1: Status Cards */}
                    <div className='col-span-1 space-y-6'>
                        
                        {/* Status Card */}
                        <CardDashboard>
                            <CardDashboardHeader>
                                <CardTitleHeader className='text-xl text-black'>
                                    Resume Status
                                </CardTitleHeader>
                            </CardDashboardHeader>
                            {/* Card Content must be here */}
                            <CardDashboardContent> 
                                <p className='text-sm text-black'>Public Visibility: <span className='text-green-600 font-bold'>LIVE</span></p>
                                <p className='text-sm text-black'>Total Views (Last 30 days):42</p>
                            </CardDashboardContent>
                        </CardDashboard>

                        {/* Analytics Placeholder Card */}
                        <CardDashboard>
                            <CardDashboardHeader>
                                <CardTitleHeader className='text-xl text=black text-black'>Analitycs Placeholder</CardTitleHeader>
                            </CardDashboardHeader>
                            {/* Card Content must be here, NOT inside the header */}
                            <CardDashboardContent> 
                                {/** placeholder for future chart integration */}
                                <div className='h-40 bg-gray-100 border border-dashed rounded-md flex items-center justify-center text-gray-500 text-sm'>
                                    [Future Chart integration]
                                </div>
                            </CardDashboardContent>
                        </CardDashboard>
                    </div>

                    {/**Column 2: The Resume Editor */}
                    <div className='col-span-1 md:col-span-2'>
                        <CardDashboard>
                            {/* Card Content for the editor */}
                            <CardDashboardHeader>
                                {/* Added mb-4 for better spacing above the content */}
                                <CardTitleHeader className='text-2xl border-b pb-4 mb-4 text-black'>Edit Summary</CardTitleHeader> 
                            </CardDashboardHeader>
                            <CardDashboardContent>
                                <SummaryEditor initialSummary={resume?.summary || ""}/>
                            </CardDashboardContent>
                               <CardDashboardHeader>
                                {/* Added mb-4 for better spacing above the content */}
                                <CardTitleHeader className='text-2xl border-b pb-4 mb-4 text-black'>Edit Personal Info</CardTitleHeader> 
                            </CardDashboardHeader>
                            <CardDashboardContent>
                                <PersonalDetailsEditor initialPersonal={resume?.personal || {} }/>
                            </CardDashboardContent>
                            <CardDashboardHeader>
                                {/* Added mb-4 for better spacing above the content */}
                                <CardTitleHeader className='text-2xl border-b pb-4 mb-4 text-black'>Edit Work Experience</CardTitleHeader> 
                            </CardDashboardHeader>
                            <CardDashboardContent> 
                                <ExperienceEditor experience={ resume?.experience || []} /> 
                            </CardDashboardContent>
                               <CardDashboardHeader>
                                {/* Added mb-4 for better spacing above the content */}
                                <CardTitleHeader className='text-2xl border-b pb-4 mb-4 text-black'>Add Skills</CardTitleHeader> 
                            </CardDashboardHeader>
                            <CardDashboardContent>
                                <SkillsEditor initialSkills={resume?.skills || {} } />
                            </CardDashboardContent>
                               <CardDashboardHeader>
                                {/* Added mb-4 for better spacing above the content */}
                                <CardTitleHeader className='text-2xl border-b pb-4 mb-4 text-black'>Edit Education</CardTitleHeader> 
                            </CardDashboardHeader>
                            <CardDashboardContent>
                                <EducationEditor education={resume?.education || [] }/>
                            </CardDashboardContent>
                        </CardDashboard>
                    </div>
                </div>
            </main>

        </div>
    )
}
