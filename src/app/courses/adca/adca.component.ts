import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-adca',
  templateUrl: './adca.component.html',
  styleUrls: ['./adca.component.scss']
})
export class AdcaComponent {
  ADCACourse = [
    { ADCACourseData: 'ADCA is a Diploma course in Computer Application. The main aim of The Advance Diploma In Computer Application program To prepare candidates in such a way that they can present and able to work in the world of computers and software. This course helps to provide information related to technologies and research which is carried out in the field of computer application.' },
    { ADCACourseData: 'The ADCA full form is Advanced Diploma In Computer Application course. Includes both theoretical as well as practical aspects so that it can provide information about the latest computer-related developments. The candidates also learn about designing and developing applications and system software which may be enforced in businesses or the corporate sector.' },
    { ADCACourseData: 'Designed and delivered by MSTL, Advanced Diploma In Computer Application ADCA Course is the one-year course that has been prepared and designed for meeting the demands of the growing needs of experts in the fields of computers, programming languages, internet, office automation, operating systems, PageMaker, tally, hardware maintenance, web design, CorelDraw, etc.' },
    { ADCACourseData: 'The modules of ADCA is prepared related to the IT Applications syllabus at the advanced Diploma level with a view to preparing software professionals for supplying to the IT and Software Industry.' },
  ]
  CourseDuration = [
    { CourseDurationData: 'The duration of the adca computer course is of 12 Months( 1 year)  Each Semester is of 6-6 months.' },
    { CourseDurationData: 'Advanced Diploma In Computer Applications (ADCA)  Comprises Of The Following Topic:' },
  ]
  FollowingTopic = [
    { FollowingTopicData: 'Forms, Database' },
    { FollowingTopicData: 'Operating System' },
    { FollowingTopicData: 'Basic Concepts of Accounts' },
    { FollowingTopicData: 'Work-Sheets' },
    { FollowingTopicData: 'Docs-Word' },
    { FollowingTopicData: 'Slides-PowerPoint' },
    { FollowingTopicData: 'FRONT PAGE' },
    { FollowingTopicData: 'Complete Internet' },
    { FollowingTopicData: 'Computer Fundamentals' },
    { FollowingTopicData: 'Basics of Computer Hardware' },
    { FollowingTopicData: 'Virus Protection & Scanning' },
    { FollowingTopicData: 'Software Installation' },
    { FollowingTopicData: 'Maintaining Ledgers, Cash Book' },
    { FollowingTopicData: 'Balance Sheet, Profit & Loss' },
    { FollowingTopicData: 'Financial Accounting (Tally)' },
    { FollowingTopicData: 'C Language, C++ Language, Foxpro' },
    { FollowingTopicData: 'HTML, JAVA SCRIPT' },
  ]
  UnderFiled = [
    { UnderFiledData: 'ADCA is a course that includes computer training from basic to advanced computer operation with accounting practical knowledge on tally ERP 9.0, Software Application knowledge on MS office (MS-WORD, MS-EXCEL, MS-POWER POINT), Typing, Tally ERP, CorelDraw Pagemaker. ADCA Course training also includes internet uses like email, Google Drive, YouTube, Social sites, etc.' },
  ]
  ADCA = [
    { ADCAData: 'Advance Diploma in Computer Applications acronym is ADCA is a course for a person who is good at maths and interested in computer technology. This course seeks to give the advance knowledge of computer applications. There is a huge demand for skilled people for handling Computer Applications.' },
  ]
  EligibilityCriteria = [
    { EligibilityCriteriaData: 'The eligibility criteria required for pursuing ADCA (Advanced Diploma in Computer Application) Course is a passing degree of 10+2 or Higher Secondary Examination or equivalent with Computers as one of the courses from a recognized/sanctioned college or university. The minimum eligible marks required for applying for this course may vary from institute to institute.' }
  ]

  CourseHighlights = [
    { ADCACourseFull: 'ADCA Course Duration', Coursevalidation: '6 Montds to 1 Year' },
    { ADCACourseFull: 'ADCA Course Fees', Coursevalidation: 'Rs. 5000 to Rs. 20,000' },
    { ADCACourseFull: 'ADCA Course Eligibility', Coursevalidation: '10+2' },
    { ADCACourseFull: 'ADCA Course Admission', Coursevalidation: 'Direct in Institutes' }
  ]

  ngOnInit() {

  }
}
