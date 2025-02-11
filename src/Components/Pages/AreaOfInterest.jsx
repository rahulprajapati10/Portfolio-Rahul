import React from 'react'
import '../Pages/AreaOfInterest.css'
import '../../Components/skillsStyle.css'


function AreaOfInterest() {
  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section-title">My Areas of Interest</h2>
        <div className="services_container bd-grid">
          <div className="services_content">
            {/* <i className="fab fa-aws fa-2x" /> */}
            <h3 className="services_title">Web Designing</h3>
            <p className="services_description">
            Web designing is the process of creating visually appealing, functional, and user-friendly websites. It involves a combination of graphic design, layout structuring, and coding using technologies like HTML, CSS, and JavaScript. A well-designed website ensures seamless navigation, responsiveness, and accessibility across different devices and screen sizes.
            </p>
          </div>
          <div className="services_content">
            {/* <i className="bx bx-mobile-alt services_icon" /> */}
            <h3 className="services_title">Ui/Ux Design</h3>
            <p className="services_description">
            UI/UX design focuses on enhancing user experience (UX) and creating visually appealing user interfaces (UI) for digital products. UX design emphasizes usability, accessibility, and user satisfaction by researching user behavior and designing intuitive workflows. UI design involves crafting interactive elements, typography, colors, and layouts to ensure an aesthetically pleasing and functional interface.
            </p>
          </div>
          <div className="services_content">
            {/* <i className="bx services_icon">
              <img src="" alt="" />
            </i> */}
            <h3 className="services_title">Frontend Development</h3>
            <p className="services_description">
            Frontend development focuses on building the visual and interactive aspects of websites and web applications that users directly engage with. It involves using technologies like HTML, CSS, and JavaScript to create responsive, user-friendly interfaces. Modern frontend development leverages frameworks and libraries such as React, Angular, and Vue.js to enhance functionality and maintainability. 
            </p>
          </div>
          <div className="services_content">
            {/* <i className="bx bxl-google services_icon" /> */}
            <h3 className="services_title">Backend Development</h3>
            <p className="services_description">
            Backend development focuses on the server-side logic, databases, and application functionality that power websites and web applications. It involves handling data storage, authentication, and business logic using programming languages like Python, Java, PHP, Ruby, and Node.js. Backend developers work with databases such as MySQL, PostgreSQL, and MongoDB to manage and retrieve data efficiently. They build APIs to enable frontend and backend communication, ensuring smooth data exchange.
            </p>
          </div>
          <div className="services_content">
            {/* <i className="bx services_icon">
            </i> */}
            <h3 className="services_title">Database</h3>
            <p className="services_description">
            A database is an organized collection of data that allows efficient storage, retrieval, and management. It is used to store vast amounts of structured information, such as customer details, transaction records, or product inventories. Databases can be classified into relational (RDBMS) and non-relational (NoSQL) types. Relational databases, like MySQL and PostgreSQL, use tables with rows and columns to store data, while NoSQL databases, like MongoDB, store data in flexible formats such as documents or key-value pairs.
            </p>
          </div>
          <div className="services_content">
            {/* <i className="fab fa-redhat fa-3x" /> */}
            <h3 className="services_title">AWS</h3>
            <p className="services_description">
            Amazon Web Services (AWS) is a comprehensive cloud computing platform offered by Amazon, providing a wide range of services such as computing power, storage, networking, and databases. AWS allows businesses to host websites, run applications, and manage data without the need for physical infrastructure. Key services include Amazon EC2 (for virtual servers), S3 (for storage), RDS (for databases), and Lambda (for serverless computing). AWS supports scalability, security, and flexibility, enabling companies of all sizes to innovate and reduce IT costs.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AreaOfInterest
