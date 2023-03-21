import { Component } from '@angular/core';

@Component({
  selector: 'app-bcc',
  templateUrl: './bcc.component.html',
  styleUrls: ['./bcc.component.scss']
})
export class BccComponent {
  BasicComputerCourse = [
    { BasicComputerCourseData: 'BCC is a Basic Computer Course which is offered by the National Institute of Electronics & Information Technology (NIEIT) Offers basic computer training to be skilled in the computer for Personal and Professional use.' },
    { BasicComputerCourseData: 'After completing this course one can get certified for various examinations as a plus certification of the BCC Course.' },
  ];
  BasicComputerCourseList = [
    { BasicComputerCourseListData: 'Acquire confidence in using computer techniques.' },
    { BasicComputerCourseListData: 'Recognize the basic components of computer fundamentals.' },
    { BasicComputerCourseListData: 'Understand data, details, and file management.' },
    { BasicComputerCourseListData: 'Create documents using Word, docs, Spreadsheet & Presentation Software.' },
    { BasicComputerCourseListData: 'Understand computer networks and Internet fundamentals.' },
    { BasicComputerCourseListData: 'ABrowse the internet, content search, email, and communicate with peers.' },
    { BasicComputerCourseListData: 'Use E-Governance and Enterprise applications.' },
    { BasicComputerCourseListData: 'Use computers to Improve existing skills and learn new skills of software.' },
  ];
  Eligibility = [
    { EligibilityData: 'The students can appear in the NIELIT BCC Examination through the following modes:' },
    { EligibilityData: 'Mainly have Direct Applicants & Candidates Sponsored by NIELIT-approved Institutes' },
    { EligibilityData: 'Candidates sponsored by NIELIT-approved Institutes that are permitted to conduct BCC Course and having obtained E-Provisional no. - Irrespective of any educational qualifications.' },
    { EligibilityData: 'Direct Applicants - Irrespective of any educational qualification needed for the Computer Basic Course.' },
    { EligibilityData: 'BCC Course Qualification - No minimum qualification is required for applying and appearing for the examination in Basic Computer Course (BCC).' },
  ];
  BenefitsCourse = [
    { BenefitsCourseData: 'The curriculum is being designed by university professors and eminent industry experts and staff.' },
    { BenefitsCourseData: 'The course has topics that are fully updated and which are highly in demand in the markets.' },
    { BenefitsCourseData: 'Computer topics are explained in English as well as in Hindi also.' },
    { BenefitsCourseData: 'A hands-on learning environment with digital facilities.' },
    { BenefitsCourseData: 'Students can select the time slot of their convenience and can seek skill development through a secured internet connection at home.' },
    { BenefitsCourseData: 'From the comfort of their homes, youth can develop skills and can complete this course which makes them job-oriented professionals.' },
    { BenefitsCourseData: 'The certificate is sent through courier at the postal address as is verified by students at home.' },
  ];
  OpportunitiesCourse=[
    {OpportunitiesCourseData:'Online Computer Courses Trainer and staffing'},
    {OpportunitiesCourseData:'Computer Operator and experts'},
    {OpportunitiesCourseData:'Data Entry operator'},
    {OpportunitiesCourseData:'Computer Teacher experts'},
    {OpportunitiesCourseData:'Receptionist'},
    {OpportunitiesCourseData:'Lab Attendant'},
    {OpportunitiesCourseData:'Computer Assistant'},
    {OpportunitiesCourseData:'Customer Care Executive'},
  ];
  CourseHighlights = [
    { ADCACourseFull: 'Basic Computer Course Duration', Coursevalidation: '6 Montds to 1 Year' },
    { ADCACourseFull: 'Basic Computer Course Fees', Coursevalidation: 'Rs. 5000 to Rs. 20,000' },
    { ADCACourseFull: 'Basic Computer Course Eligibility', Coursevalidation: '10+2' },
    { ADCACourseFull: 'Basic Computer Course Admission', Coursevalidation: 'Direct in Institutes' }
  ];

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
