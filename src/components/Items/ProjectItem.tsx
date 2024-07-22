// ProjectItem.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';

import styles from './ProjectItem.module.css';

interface ProjectItemProps {
  title: string;
  description: string;
  image: StaticImageData;
  icons: IconType[];
  projectLink: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, image, icons, projectLink }) => {

  return (
    <Link href={projectLink} passHref>

      <div className={styles.container}>
        <Image src={image} className={styles.projectImage} alt={title} width={300} height={300} />

        <div className={styles.projectDetails}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.iconContainer}>
            {icons.map((Icon, index) => (
              <Icon key={index} className={styles.icon} />
            ))}
          </div>
        </div>

      </div>

    </Link>
  );
};

export default ProjectItem;