###### Pages for Sign in and Register
	- UMKC logo (updated one) at the top right corner
	- When you first get to this page, you may or may not be signed in. (Create a sign in page and register page)
		○ If you're not signed in, it'll show you jobs sorted by "Relevance", whatever that means
			§ Sign in button at the top right corner
				□ When you click that button you'll be taken to the general UMKC portal login
		○ If you are signed in, it'll show you jobs sorted by "Relevance" as well, but meaning relevant to your major and the info taken from your UMKC account
			§ This will be connected to UMKC's actual accounts database if it's real but for now we'll create a mock database with our accounts and things that can be retrieved from our account. (I feel like we have to ask maybe Professor about who we could talk to, to find out what things can be retrieved from someone signing in. This part maybe we won't spend as much time on in the beginning so we can get the requirements out of the way first)
	- "My Applications" and "Saved Jobs" tab to the left of the sign in/profile button to see all of your previous applications

###### Admin Create/Delete/Edit Job Feature
	- Under all of the tabs, on the left there's a column with search bar up top
		○ This search bar is connected to the database of all the jobs  Instead of having a database of the job, the admin can have access to create/delete/edit jobs

###### Filtering
	- With the filters following directly bellow. (We need to learn how to filter things)
		○ Degree 
		○ Graduating semester
		○ Position
			§ Grader 
			§ Graduate teacher assistant
			§ Lab instructor
		○ Class
	- To the right of the column, taking up the majority of the page, will be all of the jobs in landscape card format and you'll scroll down to see more

###### Sorting
		○ Above the cards there will be a sort button either by relevance or date. (Need to apply sort functions to the data)
		○ The card will have the job title, and save button at the top
		○ Department name will be underneath (we can add nice icons if time permits). If there is one class but it has multiple teachers it could list out all of the teachers as well
		○ Basic qualification (not in depth)
		○ An expand button to see all of the qualifications
		
###### Extras
	
	- Clicking on the job will do the same thing that the expand feature will do
	- There will be an "apply" button that's added to the card when you expand or click on the card
	- When you click apply it'll take you to a new page
		○ If you're not signed in, it'll take you to the sign in page
			§ I feel like this is necessary because you would have to be a UMKC student in order to apply, so the sign in kind of confirms that
		○ If you are, it'll take you to the application
			§ It'll ask for your:
				□ First Name
				□ Surname (Last Name)
				□ Student ID
				□ UMKC Email
				□ Current Level (BS/MS/PhD)
				□ Graduating Semester
				□ UMKC Cumulative GPA (leave blank if first semester is in progress)
				□ Hours Completed at UMKC (leave blank if first semester is in progress
				□ Undergraduate Degree (if applicable, e.g., BTEC, BSCS, IT) 
					® GTA certification for international students can only be waived with a previous degree from a US institute.
				□ Current Major (CS/IT/ECE/EE)
				□ Applying For: (Grader, Lab Instructor or Both):
				□ (International Students ONLY) Are you GTA Certified? If so, which term did you complete your certification? If you have a previous degree from a US Institute, please indicate this as that waives GTA certification.
					® More information on the certification process can be found, here: https://catalog.umkc.edu/general-graduate-academic-regulations-information/international-graduate-student-academic-regulations/. If you have questions, please contact the School of Graduate Studies at umkcsgs@umkc.edu or 816-235-1301
					® If you are not GTA certified, you may only apply for Grader positions.
					- Courses you could serve as lab instructor or grade for (ex. CS 201L/CS 5525/ECE 216, etc.)![image](https://user-images.githubusercontent.com/70167456/218169481-56608f5d-0e36-4aa2-a263-2f4654a27bc7.png)
