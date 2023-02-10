import { Component } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent {
  TypewritingCourse = [
    { TypewritingCourseData: 'A typewriting course is a great option as it not only adds value to your resume but is also available in various writing options such as transcription, WordPress, etc. The admission process is based on a merit list for diploma courses and usually has a tenure of one year. In the case of certificate courses, the tenure ranges from a few hours up to 6 months. The eligibility criteria are 10th and 12th for both diploma and certificate courses of typewriting. The greatest benefit is the availability of online courses which helps you pursue typewriting courses in times of pandemic too. In this blog, we will go through the requisites of typewriting courses.' },
  ];
  CourseINCLUDES = [
    { CourseINCLUDESData: 'Typewriting Courses: Highlights' },
    { CourseINCLUDESData: 'Typewriting Course Benefits' },
    { CourseINCLUDESData: 'Typewriting Course Syllabus' },
    { CourseINCLUDESData: 'Typewriting Courses: Skillsets' },
    { CourseINCLUDESData: 'Typewriting Courses Fees and Duration' },
    { CourseINCLUDESData: 'List of Typewriting Courses' },
    { CourseINCLUDESData: 'Certificate Typewriting Course' },
    { CourseINCLUDESData: 'Job Profiles and Salary for Typewriting Course' },
    { CourseINCLUDESData: 'Top Recruiters for Typewriters' },
    { CourseINCLUDESData: 'Comparison of Online Typewriting Courses' },
    { CourseINCLUDESData: 'Typewriting Courses: FAQs' },
  ];
  CoursesHighlights = [
    { CoursesHighlightsData: 'Typeing', Coursevalidation: 'Certificate, Diploma' },
    { CoursesHighlightsData: 'Duration', Coursevalidation: 'Up to 1 year' },
    { CoursesHighlightsData: 'Eligibility', Coursevalidation: 'Class 10th or 12th, depending on course' },
    { CoursesHighlightsData: 'Average Fee', Coursevalidation: 'Free to INR 10,000' },
    { CoursesHighlightsData: 'Average Salary for Typing', Coursevalidation: 'INR 2.06 LPA' },
    { CoursesHighlightsData: 'Top Job Profiles', Coursevalidation: 'Data Entry Operator, Transcriptionist, Content Writer etc.' },
  ];
  CourseBenefits = [
    { CourseBenefitsData: 'Typing helps carve you into a time-efficient human being that increases your chances of getting employed as companies look forward to hiring employees that can use time efficiently.' },
    { CourseBenefitsData: 'Typing is also a skill that helps you improve your focus on computer-based tasks.' },
    { CourseBenefitsData: 'Typing also helps to boost professional image (something important and initial on your CV).' },
    { CourseBenefitsData: 'Typing is an initial stage for the development of oneself and other skills.' },
    { CourseBenefitsData: 'Typing also helps you to reduce fatigue as while typing you constantly see keys and bend your head to type but as you increase typing speed it helps you reduce fatigue.' },
    { CourseBenefitsData: 'Typing not only helps you improve posture but also prevents injuries such as stress injuries.' },
    { CourseBenefitsData: 'It also helps to find more job opportunities and if you have at least 95% accuracy, you are eligible for better-paid jobs such as transcriptionist or journalist.' },
  ]
}
