let tools = [];
let currentSort = {
    column: 'vibeScore',
    direction: 'desc'
};

// Load and initialize the data
async function loadData() {
    try {
        const response = await fetch('data/tools.json');
        const data = await response.json();
        tools = data.tools;
        
        // Populate category filter
        const categories = [...new Set(tools.map(tool => tool.category))];
        const categoryFilter = document.getElementById('categoryFilter');
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });

        // Populate deployment filter
        const deployments = [...new Set(tools.map(tool => tool.deployment))];
        const deploymentFilter = document.getElementById('deploymentFilter');
        deployments.forEach(deployment => {
            const option = document.createElement('option');
            option.value = deployment;
            option.textContent = deployment;
            deploymentFilter.appendChild(option);
        });

        // Initialize modal
        window.toolModal = new bootstrap.Modal(document.getElementById('toolModal'));

        // Initial render
        renderTools();
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Render tools based on current filters and sort
function renderTools() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const deploymentFilter = document.getElementById('deploymentFilter').value;
    
    let filteredTools = tools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) ||
                            tool.description.toLowerCase().includes(searchTerm) ||
                            tool.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
                            tool.bestFor.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || tool.category === categoryFilter;
        const matchesDeployment = !deploymentFilter || tool.deployment === deploymentFilter;
        return matchesSearch && matchesCategory && matchesDeployment;
    });

    // Sort the filtered tools
    filteredTools.sort((a, b) => {
        let aValue = a[currentSort.column];
        let bValue = b[currentSort.column];

        // Handle special cases for sorting
        if (currentSort.column === 'vibeScore') {
            aValue = parseFloat(aValue);
            bValue = parseFloat(bValue);
        } else if (currentSort.column === 'pricing') {
            // Extract numeric value from pricing string
            aValue = parseFloat(aValue.replace(/[^0-9.]/g, '')) || 0;
            bValue = parseFloat(bValue.replace(/[^0-9.]/g, '')) || 0;
        }
        
        if (currentSort.direction === 'asc') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });

    // Render the cards
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = filteredTools.map(tool => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="tool-card" onclick="showToolDetails('${tool.name}')">
                <div class="card-header">
                    <div class="vibe-score">${tool.vibeScore}</div>
                    <h5 class="card-title">${tool.name}</h5>
                    <div class="card-category">${tool.category}</div>
                </div>
                <div class="card-body">
                    <p class="card-description">${tool.description}</p>
                    <div class="features-list">
                        ${tool.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
                        ${tool.features.length > 3 ? `<li>+${tool.features.length - 3} more</li>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Show tool details in modal
function showToolDetails(toolName) {
    const tool = tools.find(t => t.name === toolName);
    if (!tool) return;

    const modal = document.getElementById('toolModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');

    modalTitle.textContent = tool.name;

    modalBody.innerHTML = `
        <div class="detail-grid">
            <div class="detail-section">
                <h6>Description</h6>
                <p>${tool.description}</p>
            </div>
            <div class="detail-section">
                <h6>Category</h6>
                <p>${tool.category}</p>
            </div>
            <div class="detail-section">
                <h6>Pricing</h6>
                <p>${tool.pricing}</p>
            </div>
            <div class="detail-section">
                <h6>Best For</h6>
                <p>${tool.bestFor}</p>
            </div>
            <div class="detail-section">
                <h6>Deployment</h6>
                <p>${tool.deployment}</p>
            </div>
            <div class="detail-section">
                <h6>AI Models</h6>
                <p>${Array.isArray(tool.aiModels) ? tool.aiModels.join(', ') : tool.aiModels}</p>
            </div>
            <div class="detail-section">
                <h6>Features</h6>
                <ul class="features-list">
                    ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="detail-section">
                <h6>Languages Supported</h6>
                <p>${tool.languagesSupported}</p>
            </div>
            <div class="detail-section">
                <h6>Company</h6>
                <p>${tool.company}</p>
            </div>
            <div class="detail-section">
                <h6>Launch Year</h6>
                <p>${tool.launchYear}</p>
            </div>
            <div class="detail-section">
                <h6>Free Tier</h6>
                <p>${tool.freeTier ? 'Yes' : 'No'}</p>
            </div>
            <div class="detail-section">
                <h6>Website</h6>
                <a href="${tool.website}" class="btn btn-primary" target="_blank">Visit Website</a>
            </div>
        </div>
    `;

    window.toolModal.show();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadData();

    // Search input handler
    document.getElementById('searchInput').addEventListener('input', renderTools);

    // Category filter handler
    document.getElementById('categoryFilter').addEventListener('change', renderTools);

    // Deployment filter handler
    document.getElementById('deploymentFilter').addEventListener('change', renderTools);

    // Sort handler
    document.getElementById('sortBy').addEventListener('change', (e) => {
        currentSort.column = e.target.value;
        currentSort.direction = 'desc';
        renderTools();
    });
}); 