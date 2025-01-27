#!/usr/bin/env node

(async () => {
    const chalk = (await import('chalk')).default;
    const boxen = (await import('boxen')).default;
    const figlet = (await import('figlet')).default;

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const printLine = async (line, delay = 1) => {
        for (const char of line) {
          process.stdout.write(char);
          await sleep(delay); 
        }
        process.stdout.write('\n');
    };

    // it will help to create hidden hyperlinks
    const hyperlink = (text, url) => `\u001b]8;;${url}\u001b\\${text}\u001b]8;;\u001b\\`;

    
    await printLine(chalk.blue(figlet.textSync('Shashi Sah', { horizontalLayout: 'full' })), 1);

  // Contact Information
  const contactInfo = boxen(
    `${chalk.white.bold('Contact:')}
  📧 ${hyperlink('sah.shashi2003@gmail.com', 'mailto:sah.shashi2003@gmail.com')}
  📱 ${chalk.blue('+91-9667539064')}
  🔗 ${hyperlink('GitHub', 'https://github.com/shashi-sah2003')}
  🔗 ${hyperlink('LinkedIn', 'https://www.linkedin.com/in/shashi-sah-56aa77175/')}
  🔗 ${hyperlink('Portfolio', 'https://shashi-sah.vercel.app/')}
  🎓 ${chalk.yellow('DTU Roll: 2K22/CO/425')}`,
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'blue'
    }
  );
  
  await printLine(contactInfo);
  
    // Education
    const education = `
    🎓 ${chalk.magenta.bold('Education')}
    ──────────────────────────────────
    ${chalk.yellow('B-TECH (Computer Engineering)')}
    Delhi Technological University, Delhi
    ${chalk.green('CGPA - 8.24')} | 2022-2026
    
    ${chalk.yellow('C.B.S.E. (Class XII)')}
    Army Public School, Dhaula Kuan, Delhi
    ${chalk.green('93.6%')} | 2022
    
    ${chalk.yellow('C.B.S.E. (Class X)')}
    Army Public School, Dhaula Kuan, Delhi
    ${chalk.green('92%')} | 2020
    `;
    await printLine(education);
  
    // Experience
    const experience = `
    💼 ${chalk.magenta.bold('Experience')}
    ──────────────────────────────────
    ${chalk.yellow.bold('Full Stack Developer')} at Gabbit, New Delhi
    ${chalk.gray('Aug 2023 - Jan 2024')}
    • Authentication system with Node.js and SHA-256
    • OTP generation with Cron jobs
    • Mobile-friendly Flutter interface

    ${chalk.yellow.bold('Research Intern')} at Samsung Research Lab, DTU
    ${chalk.gray('Sep 2023 - Feb 2024')}
    • 96% accuracy in soil nutrient extraction
    • Developed DSeP-xNET for AFSIS/LUCAS dataset
    `;
    await printLine(experience);
  
  // Skills
  const skills = `
    🛠️ ${chalk.magenta.bold('Skills')}
    ──────────────────────────────────
    ${chalk.green('Programming:')} Python, C++, JavaScript, Dart
    ${chalk.green('Frameworks:')} Django, Express.js, Node.js, FASTAPI, Flutter
    ${chalk.green('Databases:')} MySQL, MongoDB, Elasticsearch
    ${chalk.green('Others:')} Git, Docker, Linux, Windows
    `;
    await printLine(skills);
  
  // Publications
  const publications = `
    📚 ${chalk.magenta.bold('Publications')}
    ──────────────────────────────────
    ${chalk.yellow('1. Audio Based Machine Fault Diagnosis')}
    IEEE ICCCNT 2024

    ${chalk.yellow('2. DSeP-xNet: Feature Optimized Ensemble Framework')}
    IEEE ARIIA 2024
    `;
    await printLine(publications);
  
  // Achievements
    const achievements = `
    🏆 ${chalk.magenta.bold('Achievements')}
    ──────────────────────────────────
    • Class of 1959 Scholarship
    • 1st runner up in E-commerce hackathon
    • Honored by PM Modi for team performance
    `;
    await printLine(achievements);
})();