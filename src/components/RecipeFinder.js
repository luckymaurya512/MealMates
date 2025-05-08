import { useState } from 'react';
import run from '../config/gemini';

const RecipeFinder = () => {
    const [query, setQuery] = useState('');
    const [recipe, setRecipe] = useState('');
    const [loading, setLoading] = useState(false);

    const formatRecipe = (text) => {
        // Replace markdown headers with HTML headers
        text = text.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">$1</h2>');
        
        // Replace bold text
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Replace italic text
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Replace bullet points
        text = text.replace(/^\* (.*$)/gm, '<li class="ml-6 mb-2">$1</li>');
        
        // Wrap bullet points in ul
        text = text.replace(/(<li class="ml-6 mb-2">.*<\/li>)/gs, '<ul class="list-disc mb-4">$1</ul>');
        
        // Replace numbered lists
        text = text.replace(/^\d+\. (.*$)/gm, '<li class="ml-6 mb-2">$1</li>');
        
        // Wrap numbered lists in ol
        text = text.replace(/(<li class="ml-6 mb-2">.*<\/li>)/gs, '<ol class="list-decimal mb-4">$1</ol>');
        
        // Add spacing between sections
        text = text.replace(/\n\n/g, '<br/><br/>');
        
        return text;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const prompt = `Find a detailed recipe for ${query}. Include ingredients, instructions, and cooking time.`;
            const response = await run(prompt);
            const formattedResponse = formatRecipe(response);
            setRecipe(formattedResponse);
        } catch (error) {
            console.error('Error fetching recipe:', error);
            setRecipe('Sorry, there was an error finding the recipe. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-500 text-gray-900 dark:text-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Find Your Recipe</h2>
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex gap-4">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter an ingredient or dish name..."
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-72 mx-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-3 bg-blue-500 text-white dark:text-gray-100 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-700"
                    >
                        {loading ? 'Finding...' : 'Find Recipe'}
                    </button>
                </div>
            </form>
            {recipe && (
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-colors duration-500 text-gray-900 dark:text-gray-100">
                    <div 
                        className="prose max-w-none dark:prose-invert text-gray-900 dark:text-gray-100"
                        dangerouslySetInnerHTML={{ __html: recipe }}
                    />
                </div>
            )}
        </div>
    );
};

export default RecipeFinder; 