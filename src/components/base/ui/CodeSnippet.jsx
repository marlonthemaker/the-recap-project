const CodeSnippet = ({ children }) => {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 bg-gray-800/40 ring-1 ring-white/5">
                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        CodeSnippet.jsx
                    </div>
                    <div className="border-r border-gray-600/10 px-4 py-2">Example.jsx</div>
                </div>
            </div>
             <div className="px-6 pb-14 pt-6">
                {children}
            </div>
         </div>
    );
};

export default CodeSnippet;