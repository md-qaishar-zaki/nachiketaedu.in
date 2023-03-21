import { Component } from '@angular/core';

@Component({
  selector: 'app-dca',
  templateUrl: './dca.component.html',
  styleUrls: ['./dca.component.scss']
})
export class DCAComponent {
  DetailsCourse = [
    { CourseDeta: 'DCA CourseDeta is a Diploma of Computer Applications program with a one-year duration. DCA imparts scientific, practical, and technical knowledge to its learners regarding various computer tools that are used in day-to-day life. Computer applications make it easier and provide ease of use.' },
    { CourseDeta: 'A computer programmer or operator is high in all sectors of the market. All these are used at shops to create a database for all the items with their serial numbers, price, and quantity rations.' },
    { CourseDeta: 'At schools, computer operators are required to sit behind the desk and manage the computer database for the school, list of all the students, their details, fee payment, enrollment details, and all other activities of students are recorded on the computer.' },
    { CourseDeta: `n efficient computer operator is needed to handle such large data. In offices, the computer operator takes care of the back door operation and keeps employees' information in the computer itself.` },
    { CourseDeta: `The benefits of computers are many and an efficien computer technician is required to facilitate many computer tasks.` }
  ]
  CourseHighlights = [
    { DCACourseFull: 'DCA Course Duration', Coursevalidation: '6 Montds to 1 Year' },
    { DCACourseFull: 'DCA Course Fees', Coursevalidation: 'Rs. 5000 to Rs. 20,000' },
    { DCACourseFull: 'DCA Course Eligibility', Coursevalidation: '10+2' },
    { DCACourseFull: 'DCA Course Admission', Coursevalidation: 'Direct in Institutes' }
  ]
  Syllabus = [
    { SyllabusData: 'DCA Syllabus 2023' },
    { SyllabusData: 'Basics Computer Skills' },
    { SyllabusData: 'MS Office Applications' },
    { SyllabusData: 'Internet Basics' },
    { SyllabusData: 'E-Business' },
    { SyllabusData: 'Software Hacking & IT security' },
    { SyllabusData: 'PC Assembly and Troubleshooting' },
    { SyllabusData: 'Software Engineering' },
  ]
  DCAComputerCourse = [
    { DCAComputerCourseData: `DCA Computer course is known as Diploma in Computer Applications. First, understand about DCA, the full name of DCA is Diploma In Computer Applications, it is a computer course ranging from 6 months to one year, in which all the Cores related to the computer are coming to DCA Computer Course Programming you. , Web Design, Database Etc, DCA Computer Course, all students can do after 10th and 12th, because the DCA is just a Diploma Course.` },
    { DCAComputerCourseData: `After completing the DCA course, you get a job in an IT company because of this you have to work on topics like web design, database, and programming, and talk about the fees of the DCA.` },
    { DCAComputerCourseData: `You have to pay fees from five thousand to 20 thousand. Every basic computer language sheds in DCA Course and those are as follows:` },
  ]
  ScopeofCourse = [
    { ScopeofCourseData: `This field is full of scope in the field of DCA. One can do a proper job or he/she may move for higher studies after completing this course. The self-employment option is also there for those who don’t want to do the job. Freelancing can be done by you to develop your own software.` },
    { ScopeofCourseData: `If you possess those skills. There are many software MNCs Multinational Companies which provides job to the BCA graduates. If any candidate has work experience and all the necessary required skills then he/she may hold good profiles in MNCs.` },
    { ScopeofCourseData: `If deep knowledge is required in this field, then you must opt. for advanced courses such as MCA Course and Ph.D. MCA can be specialized in system management, system development, management information system, etc. Once you have completed MCA, as a candidate you may also get the job of a lecturer in any of the reputed institutions.` },
    { ScopeofCourseData: `The never-ending demand for IT professionals is increasing day by day not only in India but also abroad. Once you have completed this course, you can find a job in many reputed IT companies such as IBM, Oracle, Infosys, and Google as well. All the students may work as system engineers, junior programmers, web developers,s or system administrators.` },
    { ScopeofCourseData: `This field provides you with ample opportunities to make your career not only in the private sector but also in the public sector. Many organizations like NIC, Indian Army, Indian Air Force, and India Navy also recruit a number of computer professionals in their department especially IT’s.` },
  ]

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
