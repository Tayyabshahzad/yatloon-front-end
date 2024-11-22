export default function Terms({ terms, handleTermChange }) {
    return (
        <div className="w-full text-black rounded-lg overflow-hidden"> 
            <select 
                id="terms"
                onChange={(e) => handleTermChange(e.target.value)} // Trigger term selection on change
                required
            >
                <option value="">Select Term</option>
                {terms.map(term => (
                    <option key={term.id} value={term.id}>
                        {term.title}
                    </option>
                ))}
            </select>
        </div>
    );
  }
  