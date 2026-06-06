"use client"
import { TeamMember } from '@/types/team-d-t';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  member: TeamMember;
  index: number;
  activeCard: number | null;
  setActiveCard: React.Dispatch<React.SetStateAction<number | null>>;
  className?: string;
}

const DesignStudioTeamCard: React.FC<Props> = ({ member, index, activeCard, setActiveCard, className }) => {
  return (
    <article 
      className={`des-team-item ${className} ${activeCard === index ? 'active' : ''}`}
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
      aria-label={`${member.name} team profile`}
    >
      <div className="des-team-img">
        {member.image && <Image style={{ width: "100%", height: "auto" }} src={member.image} alt={member.name} />}
      </div>
      <div className="des-team-content">
        <h4 className="des-team-title">
          <Link href={member.link || '#'}>{member.name}</Link>
        </h4>
        <span className="des-team-designation">{member.position}</span>
      </div>
    </article>
  );
};

export default DesignStudioTeamCard;
