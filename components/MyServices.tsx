import React from 'react'

function MyServices() {
  return (
    <div className="space-y-10 mt-20">
      <h2 className="text-center text-3xl lg:text-4xl font-bold">My Services</h2>
      <p className="text-center mx-auto max-w-md">
        I always give the best effort for each projects I did. I give a solution
        with my creative app.
      </p>
      <div className="flex items-start gap-6">
        <img src="/ide.svg" alt="icon idea" />
        <div className="space-y-3">
          <h2 className="font-bold">Inovative Ideas</h2>
          <p className='max-w-xl'>
            I am ready to start from scratch, or continue the ongoing projects.
            I always give innovative ideas to build the best applications.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-6">
        <img src="/clean-code.svg" alt="icon clean code" />
        <div className="space-y-3">
          <h2 className="font-bold">Clean Code</h2>
          <p className='max-w-xl'>
            I always give a clean code to the consumer so the application is
            easy to understand and easy to develop.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-6">
        <img src="/best-result.svg" alt="icon best-result" />
        <div className="space-y-3">
          <h2 className="font-bold">Best Result</h2>
          <p className='max-w-xl'>I will give you the best applications for your best ideas.</p>
        </div>
      </div>
      <div className="flex items-start gap-6">
        <img src="/low-price.svg" alt="icon low price" />
        <div className="space-y-3">
          <h2 className="font-bold">Low Price</h2>
          <p className='max-w-xl'>
            Tell your great app to me. Adjust your budget. And "BOOM", your app
            ready to published.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyServices
