

function ViewMore(props) {
    // Access the state object from props.location
    const { state } = props.location;

    // Check if state is defined and has the selectedProducts property
    if (!state || !state.selectedProducts) {
        // Render a message or handle the absence of selectedProducts data
        return <div>No product data found.</div>;
    }

    // Destructure selectedProducts from the state object
    const { selectedProducts } = state;

    return (
        <div>
            <h2>Selected Product ID: {selectedProducts}</h2>
            {/* Render other details of the selected product */}
        </div>
    );
}

export default ViewMore;
