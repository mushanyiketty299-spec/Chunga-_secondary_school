import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function NotesPage() {
  const session = await auth();
  if (!session) redirect('/auth/signin');

  const subjects = [
    "Mathematics", "English", "Physics", "Chemistry", "Biology",
    "Civic Education", "History", "Geography", "Literature", "Computer Studies"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Senior Secondary Notes (Grade 10-12)</h1>
      <p className="text-center text-gray-600 mb-12">ECZ Aligned Materials - Chunga Secondary School Students Only</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div key={subject} className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-3">{subject}</h3>
            <p className="text-gray-600 text-sm mb-6">Complete notes, examples, past papers & exercises</p>
            
            {/* Placeholder for real content */}
            <div className="space-y-3">
              <a href="#" className="block text-blue-600 hover:underline">→ Unit 1: Fundamentals (PDF)</a>
              <a href="#" className="block text-blue-600 hover:underline">→ Revision Exercises</a>
              <a href="#" className="block text-blue-600 hover:underline">→ Past ECZ Questions (2018-2025)</a>
            </div>
            
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg">
              Download Full Notes
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-amber-50 border border-amber-200 p-8 rounded-2xl">
        <h2 className="font-semibold text-lg mb-4">Note on Legitimate Content</h2>
        <p className="text-sm text-gray-700">
          For real, up-to-date ECZ-aligned notes, use official sources like the Curriculum Development Centre (CDC) Zambia or eskulu.com. 
          You can link or embed public PDFs here. Never host copyrighted material without permission.
        </p>
      </div>
    </div>
  );
}
