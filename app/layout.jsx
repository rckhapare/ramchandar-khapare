import './globals.css';
export const metadata = {
  title: 'Ramchandra Khapare | Automation & Robotics Portfolio',
  description: 'Portfolio of Ramchandra Ashok Khapare, an Automation & Robotics diploma student exploring PLCs, industrial robotics, sensors and control systems.',
  keywords: ['Ramchandra Khapare','Automation and Robotics','PLC programming','Siemens PLC','FANUC robotics','industrial automation student'],
  openGraph: { title: 'Ramchandra Khapare | Automation & Robotics', description: 'Academic projects in industrial automation, PLCs and robotics.', type: 'website' }
};
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}