"use client";

import { CircleArrowRight } from "lucide-react";

export default function GetStartedButton() {
    return (
      <button
        className="font-gist-sense"
        style={{
          fontSize: '16px',
          fontWeight: 500,
          padding: '12px 24px',
          borderRadius: '8px',
          backgroundColor: '#0052CC',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#0065FF';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#0052CC';
        }}
      >
        Get Started
        <CircleArrowRight size={18} />
      </button>
    );
  }