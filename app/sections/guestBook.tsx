
import { ExternalLink, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { comments } from '../schema/work';
const GuestBook = ({className}: any) => {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [saveInfo, setSaveInfo] = useState(false);
   
    return (
        <div className={`flex-1 p-8 overflow-y-auto ${className}`} style={{scrollbarWidth: 'thin'}}>
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen size={20} />
                Guest Book
            </h2>

            {/* Comment Form */}
            <div className="mb-8">
                <textarea
                    className="w-full bg-gray-800 rounded p-4 text-white border border-gray-700 mb-4 resize-none"
                    rows={4}
                    placeholder="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                <input
                    type="text"
                    className="w-full bg-gray-800 rounded p-4 text-white border border-gray-700 mb-3"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <div className="flex items-start gap-3 flex-col mb-6">
                    <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                        <input
                            type="checkbox"
                            className="w-4 h-4"
                            checked={saveInfo}
                            onChange={() => setSaveInfo(!saveInfo)}
                        />
                        Save my name for the next time I come.
                    </label>

                    <button className="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded text-sm font-medium flex items-center gap-2">
                        SUBMIT <ExternalLink size={14} />
                    </button>
                </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
                {comments.map((comment, index) => (
                    <div key={index} className="border-b border-gray-700 pb-4">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-yellow-500">{comment.name}</span>
                            <span className="text-xs text-gray-400">{comment.date}</span>
                        </div>
                        <p className="text-gray-300">{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default GuestBook;