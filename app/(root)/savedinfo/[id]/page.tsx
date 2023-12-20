import React from 'react';
import { SavedInfoForm } from '@/components'
 const SavedInfo = () => {
  return (
    <div className="flex flex-col min-h-screen items-center pt-24">
        <h1 className='text-xl font-bold'>Your Saved Data</h1>
      <SavedInfoForm />
    </div>
  )
}

export default SavedInfo