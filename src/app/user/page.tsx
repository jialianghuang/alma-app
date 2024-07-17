import Header from "./header"
import ApplicationForm from "./application"
export default function User() {
    return (
        <div>
        <Header />
        <main className="w-full max-w-[674px] px-4 mx-auto">
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <p className=" font-bold tracking-tight text-gray-900 sm:text-4xl">Want to understand your visa options?</p>
        <p className="mt-2 font-bold text-lg leading-8 text-gray-600">
        Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals.
        </p>
      </div>
      <ApplicationForm/>
    </div>
    </main>
    </div>
    )
}