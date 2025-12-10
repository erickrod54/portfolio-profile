import * as React from 'react';
import { forwardRef } from 'react';

/**Portfolio-erick - version 56.07 - CardDashboard -
* Features:

    -→> Building lego pieces for 'DashboardLayout' 

* Notes: This arquitectural design follows a headless UI
* pattern that is scallable ( receive props and partial css)
* and has the following:
*
*       1.- CardDashboard
*       2.- CardDashboardHeader
*       3.- CardTitleHeader
*       4.- CardDashboardContent
*
* the append to 'displayName' is important to be exactly as it is
* because can generate silent rendering ( does not render the content)
*
**/

//Card Container
const CardDashboard = forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={`rounded-lg border bg-white text-card-foreground shadow-sm ${className}`}
        {...props}
    />
))

CardDashboard.displayName = 'CardDashboard'

//Card Header
const CardDashboardHeader = forwardRef(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`flex flex-col space-y-1.5 p-6 ${className}`}
            {...props}
        />   
    )
})
CardDashboardHeader.displayName = 'CardDashboardHeader'

//CardTitleHeader
const CardTitleHeader = forwardRef(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
        {...props}
    />
))
CardTitleHeader.displayName = 'CardTitleHeader';

//Card Content
const CardDashboardContent = forwardRef(({ className, ...props }, ref) => {
    return (
        <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
    )
})

CardDashboardContent.displayName = 'CardDashboardContent'

export {CardDashboard, CardDashboardHeader, CardTitleHeader, CardDashboardContent }