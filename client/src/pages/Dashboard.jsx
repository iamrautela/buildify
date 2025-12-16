import {PlusIcon, UploadCloudIcon} from 'lucide-react';
import React from 'react';
import {useEffect, useState} from 'react'
import {dummyResumeData} from '../assets/assets'

const Dashboard = () => {
  const[allResumes, setAllResumes] = useState([])

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData)
  }

  useEffect(() => {
    loadAllResumes()
  }, [])

  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>

        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600
        to-slate-700 bg-clip-text text-transparent sm:hidden'>Welcome, John Doe</p>

      </div>
      <div></div>
    </div>