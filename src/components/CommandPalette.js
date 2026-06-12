import React, { useState, useEffect, useRef } from 'react';
import './CommandPalette.css';

const CommandPalette = ({ isOpen, onClose, onToggleRecruiter, isRecruiterMode }) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const paletteRef = useRef(null);

  const commands = [
    { name: 'View Projects', desc: 'Go to projects showcase', action: () => { window.location.hash = '#projects'; onClose(); } },
    { name: 'Open Resume', desc: 'View downloadable developer resume', action: () => { window.location.hash = '#resume'; onClose(); } },
    { name: 'Go to Dashboard', desc: 'View developer analytics and stats dashboard', action: () => { window.location.hash = '#dashboard'; onClose(); } },
    { name: 'Go to Experience', desc: 'View professional work history', action: () => { window.location.hash = '#experience'; onClose(); } },
    { name: 'Go to Skills', desc: 'View capability metrics & developer tools', action: () => { window.location.hash = '#skills'; onClose(); } },
    { name: 'Go to Achievements', desc: 'View competitive coding & contests', action: () => { window.location.hash = '#achievements'; onClose(); } },
    { name: 'Go to Education', desc: 'View academic history & degrees', action: () => { window.location.hash = '#education'; onClose(); } },
    { name: 'Go to CP Profiles', desc: 'View competitive programming dashboard', action: () => { window.location.hash = '#cp-profiles'; onClose(); } },
    { name: 'Go to Certifications', desc: 'View credentials and courses', action: () => { window.location.hash = '#certifications'; onClose(); } },
    { name: isRecruiterMode ? 'Disable Recruiter Mode' : 'Enable Recruiter Mode', desc: 'Toggle all-in-one scrollable scanner', action: () => { onToggleRecruiter(); onClose(); } },
    { name: 'Open GitHub Profile', desc: 'Visit github.com/senthamizhselvan-sm', action: () => { window.open('https://github.com/senthamizhselvan-sm', '_blank'); onClose(); } },
    { name: 'Open LeetCode Profile', desc: 'Visit leetcode.com/senthamizhselvan-sm_cse-N', action: () => { window.open('https://leetcode.com/senthamizhselvan-sm_cse-N', '_blank'); onClose(); } }
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(search.toLowerCase()) || 
    cmd.desc.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && paletteRef.current && !paletteRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="palette-overlay">
      <div className="palette-container" ref={paletteRef}>
        <div className="palette-header">
          <i className="fas fa-search search-icon"></i>
          <input
            ref={inputRef}
            type="text"
            className="palette-input"
            placeholder="Type a command or search sections..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <kbd className="palette-kbd">ESC</kbd>
        </div>

        <div className="palette-results">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, index) => (
              <div
                key={index}
                className={`palette-item ${index === selectedIndex ? 'selected' : ''}`}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => cmd.action()}
              >
                <div className="palette-item-left">
                  <span className="palette-arrow">&gt;</span>
                  <span className="palette-name">{cmd.name}</span>
                </div>
                <span className="palette-desc">{cmd.desc}</span>
              </div>
            ))
          ) : (
            <div className="palette-no-results">
              <i className="fas fa-exclamation-triangle"></i>
              <span>No commands matched your search</span>
            </div>
          )}
        </div>
        
        <div className="palette-footer">
          <span>Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate, <kbd>Enter</kbd> to select</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
