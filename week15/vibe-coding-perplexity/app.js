// Data for vibe coding tools
const toolsData = [
    {
        "name": "Cursor",
        "category": "AI Code Editor",
        "description": "VS Code fork with built-in AI assistant for code generation and editing",
        "pricing": "$20/month Pro",
        "key_features": "AI-powered code completions, natural language editing, multi-file changes, chat interface",
        "best_for": "Professional developers, iterative development",
        "deployment": "Desktop",
        "ai_models": "Claude 3.5 Sonnet, GPT-4o",
        "languages_supported": "80+",
        "company": "Anysphere",
        "launch_year": "2023",
        "free_tier": "Yes",
        "vibe_score": "9/10"
    },
    {
        "name": "Windsurf",
        "category": "AI Code Editor", 
        "description": "Agentic code editor with autonomous AI flows and contextual understanding",
        "pricing": "$15/month Pro",
        "key_features": "Cascade AI flows, Supercomplete, Inline AI, contextual understanding, automatic bug fixing",
        "best_for": "Data science projects, autonomous coding workflows",
        "deployment": "Desktop",
        "ai_models": "Claude 3.5 Sonnet, GPT-4",
        "languages_supported": "70+",
        "company": "Codeium",
        "launch_year": "2024", 
        "free_tier": "Yes",
        "vibe_score": "8.5/10"
    },
    {
        "name": "GitHub Copilot",
        "category": "AI Code Assistant",
        "description": "AI pair programmer developed by GitHub and OpenAI",
        "pricing": "$10/month Individual, $19/month Business",
        "key_features": "Code suggestions, chat interface, pull request summaries, test generation",
        "best_for": "GitHub ecosystem users, team collaboration",
        "deployment": "IDE Extension",
        "ai_models": "GPT-4, Codex",
        "languages_supported": "Dozens",
        "company": "GitHub/Microsoft",
        "launch_year": "2021",
        "free_tier": "Yes (limited)",
        "vibe_score": "7.5/10"
    },
    {
        "name": "Bolt.new",
        "category": "Web-based AI Builder",
        "description": "AI-powered web app builder with full-stack development capabilities",
        "pricing": "Free tier, $20/month Pro",
        "key_features": "Full-stack development, NPM packages, deployment integration, error detection",
        "best_for": "Rapid prototyping, MVP development, demos",
        "deployment": "Web Browser",
        "ai_models": "Claude 3.5 Sonnet",
        "languages_supported": "JavaScript, TypeScript, React, Vue, Svelte",
        "company": "StackBlitz",
        "launch_year": "2024",
        "free_tier": "Yes",
        "vibe_score": "8/10"
    },
    {
        "name": "Lovable",
        "category": "Web-based AI Builder",
        "description": "Chat-driven web app builder with Supabase integration and multiplayer features",
        "pricing": "$25/month Pro, Teams available",
        "key_features": "Text-to-app generation, Supabase integration, multiplayer workspaces, security scanning",
        "best_for": "Quick prototyping, team collaboration, production apps",
        "deployment": "Web Browser",
        "ai_models": "GPT-4, Claude",
        "languages_supported": "React, TypeScript, shadcn/ui",
        "company": "Lovable",
        "launch_year": "2024",
        "free_tier": "Yes",
        "vibe_score": "8.5/10"
    },
    {
        "name": "v0 by Vercel",
        "category": "Web-based AI Builder",
        "description": "Generative UI tool for creating React components and apps with natural language",
        "pricing": "Free tier, Premium plans available",
        "key_features": "Component generation, Vercel deployment, iterative design, code export",
        "best_for": "UI/UX prototyping, React development, landing pages",
        "deployment": "Web Browser",
        "ai_models": "GPT-4, Custom models",
        "languages_supported": "React, Next.js, TypeScript",
        "company": "Vercel",
        "launch_year": "2023",
        "free_tier": "Yes",
        "vibe_score": "8/10"
    },
    {
        "name": "Databutton",
        "category": "Web-based AI Builder",
        "description": "AI app builder with MCP support for creating tools that AI assistants can use",
        "pricing": "Free tier, Pro plans available",
        "key_features": "Full-stack apps, MCP integration, natural language coding, AI tool creation",
        "best_for": "Business tools, AI assistant integrations, automation",
        "deployment": "Web Browser",
        "ai_models": "GPT-4, Claude",
        "languages_supported": "Python, JavaScript, React",
        "company": "Databutton",
        "launch_year": "2023",
        "free_tier": "Yes",
        "vibe_score": "7.5/10"
    },
    {
        "name": "Tempo AI",
        "category": "Visual IDE",
        "description": "Visual IDE for React with AI assistance and design-to-code capabilities",
        "pricing": "Beta pricing TBA",
        "key_features": "Visual design panel, Figma plugin, AI reasoning, SaaS templates, Expo support",
        "best_for": "React development, design-to-code workflows, mobile apps",
        "deployment": "Web Browser",
        "ai_models": "Gemini, Claude",
        "languages_supported": "React, React Native, TypeScript",
        "company": "Tempo Labs",
        "launch_year": "2024",
        "free_tier": "Yes (Beta)",
        "vibe_score": "7/10"
    },
    {
        "name": "Claude Artifacts",
        "category": "AI Chat Platform",
        "description": "AI-powered single page app creation within Claude's chat interface",
        "pricing": "$20/month Claude Pro",
        "key_features": "Interactive components, HTML/CSS/JS generation, real-time preview, iteration",
        "best_for": "Quick prototypes, educational tools, simple web apps",
        "deployment": "Web Browser",
        "ai_models": "Claude 3.5 Sonnet",
        "languages_supported": "HTML, CSS, JavaScript, React",
        "company": "Anthropic",
        "launch_year": "2024",
        "free_tier": "Yes (limited)",
        "vibe_score": "8/10"
    },
    {
        "name": "TabNine",
        "category": "AI Code Assistant",
        "description": "AI-powered code completion and chat for 80+ languages with enterprise security",
        "pricing": "$12/month Pro, Enterprise available",
        "key_features": "Code completion, AI chat, privacy-focused, customizable, enterprise security",
        "best_for": "Enterprise development, security-conscious teams, multi-language projects",
        "deployment": "IDE Extension",
        "ai_models": "Custom models, GPT",
        "languages_supported": "80+",
        "company": "Codota",
        "launch_year": "2019",
        "free_tier": "Yes",
        "vibe_score": "7/10"
    },
    {
        "name": "Codeium",
        "category": "AI Code Assistant",
        "description": "Free AI coding assistant with autocomplete, chat, and command features",
        "pricing": "Free, $12/month Teams",
        "key_features": "Free unlimited usage, autocomplete, chat, command palette, 70+ languages",
        "best_for": "Individual developers, cost-conscious teams, learning",
        "deployment": "IDE Extension",
        "ai_models": "Proprietary models",
        "languages_supported": "70+",
        "company": "Exafunction",
        "launch_year": "2022",
        "free_tier": "Yes (generous)",
        "vibe_score": "7.5/10"
    },
    {
        "name": "Aider",
        "category": "Terminal AI Assistant",
        "description": "AI pair programming in the terminal with git integration and voice support",
        "pricing": "Open source, pay for LLM APIs",
        "key_features": "Terminal-based, git integration, voice commands, codebase mapping, linting",
        "best_for": "Command-line developers, existing codebases, git workflows",
        "deployment": "Terminal/CLI",
        "ai_models": "Claude 3.5 Sonnet, DeepSeek, GPT-4o, o1",
        "languages_supported": "All major languages",
        "company": "Open Source",
        "launch_year": "2023",
        "free_tier": "Yes (open source)",
        "vibe_score": "8/10"
    },
    {
        "name": "Sourcegraph Cody",
        "category": "Enterprise AI Assistant",
        "description": "Enterprise AI code assistant with whole codebase context and shared prompts",
        "pricing": "Free tier, $9/month Pro, Enterprise available",
        "key_features": "Codebase context, shared prompts, multiple models, auto-edit, prompt library",
        "best_for": "Enterprise teams, large codebases, consistent quality across teams",
        "deployment": "IDE Extension",
        "ai_models": "Claude Sonnet 4, Gemini 1.5 Pro, GPT-4o, Mixtral",
        "languages_supported": "All major languages",
        "company": "Sourcegraph",
        "launch_year": "2023",
        "free_tier": "Yes",
        "vibe_score": "7.5/10"
    },
    {
        "name": "Gemini Code Assist",
        "category": "AI Code Assistant",
        "description": "Google's AI coding assistant with strong integration in Google Cloud ecosystem",
        "pricing": "Free (limited), Enterprise pricing",
        "key_features": "Multi-language support, adaptive learning, debugging assistance, documentation citations",
        "best_for": "Google Cloud users, enterprise development, learning",
        "deployment": "IDE Extension",
        "ai_models": "Gemini family",
        "languages_supported": "Python, JavaScript, Java, Go, etc.",
        "company": "Google",
        "launch_year": "2024",
        "free_tier": "Yes",
        "vibe_score": "7/10"
    },
    {
        "name": "Replit AI",
        "category": "Cloud IDE",
        "description": "Browser-based coding environment with integrated AI assistance",
        "pricing": "Free tier, $7/month Hacker, $20/month Pro",
        "key_features": "Cloud-based IDE, real-time collaboration, AI code generation, instant deployment",
        "best_for": "Education, collaboration, quick experiments, beginners",
        "deployment": "Web Browser",
        "ai_models": "Custom models, GPT",
        "languages_supported": "50+ languages",
        "company": "Replit",
        "launch_year": "2016",
        "free_tier": "Yes",
        "vibe_score": "7/10"
    },
    {
        "name": "Bubble",
        "category": "No-code Platform",
        "description": "Visual programming platform with AI assistance for complex app development",
        "pricing": "$29/month Personal, higher tiers available",
        "key_features": "Visual workflows, database management, API integrations, responsive design",
        "best_for": "Complex web applications, startups, non-technical builders",
        "deployment": "Web Browser",
        "ai_models": "Integrated AI features",
        "languages_supported": "Visual programming",
        "company": "Bubble Group",
        "launch_year": "2012",
        "free_tier": "Yes",
        "vibe_score": "6.5/10"
    },
    {
        "name": "Glide",
        "category": "No-code Platform", 
        "description": "Data-driven app builder that converts spreadsheets to web applications",
        "pricing": "$49/month Business, other tiers available",
        "key_features": "Spreadsheet integration, data syncing, templates, mobile-responsive",
        "best_for": "Data-heavy applications, business tools, rapid deployment",
        "deployment": "Web Browser",
        "ai_models": "Built-in AI features",
        "languages_supported": "Visual programming",
        "company": "Glide Apps",
        "launch_year": "2018",
        "free_tier": "Yes",
        "vibe_score": "6/10"
    },
    {
        "name": "Softr",
        "category": "No-code Platform",
        "description": "Business tool builder with pre-built templates and automation integrations",
        "pricing": "$49/month Professional, other tiers available", 
        "key_features": "Pre-built templates, drag-and-drop, automation integrations, custom workflows",
        "best_for": "Internal business tools, portals, tracking systems",
        "deployment": "Web Browser",
        "ai_models": "AI-enhanced features",
        "languages_supported": "Visual programming",
        "company": "Softr",
        "launch_year": "2020",
        "free_tier": "Yes",
        "vibe_score": "6/10"
    }
];

// Application state
let filteredTools = [...toolsData];
let currentSort = { column: null, direction: null };
let currentFilters = {
    search: '',
    category: '',
    freeTier: '',
    year: ''
};

// DOM elements
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');
const categoryFilter = document.getElementById('category-filter');
const freeTierFilter = document.getElementById('free-tier-filter');
const yearFilter = document.getElementById('year-filter');
const resetFiltersBtn = document.getElementById('reset-filters');
const toolsTable = document.getElementById('tools-table');
const toolsTbody = document.getElementById('tools-tbody');
const resultsCount = document.getElementById('results-count');
const exportBtn = document.getElementById('export-btn');
const printBtn = document.getElementById('print-btn');
const toolModal = document.getElementById('tool-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const toolDetails = document.getElementById('tool-details');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populateFilters();
    updateStatistics();
    renderTable();
    setupEventListeners();
    loadUserPreferences();
});

// Populate filter dropdowns
function populateFilters() {
    // Get unique categories
    const categories = [...new Set(toolsData.map(tool => tool.category))].sort();
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Update statistics dashboard
function updateStatistics() {
    const totalTools = filteredTools.length;
    const totalCategories = new Set(filteredTools.map(tool => tool.category)).size;
    const avgScore = filteredTools.reduce((sum, tool) => {
        const score = parseFloat(tool.vibe_score.split('/')[0]);
        return sum + score;
    }, 0) / totalTools;
    const freeTools = filteredTools.filter(tool => 
        tool.free_tier.toLowerCase().includes('yes')
    ).length;

    document.getElementById('total-tools').textContent = totalTools;
    document.getElementById('total-categories').textContent = totalCategories;
    document.getElementById('avg-score').textContent = avgScore.toFixed(1);
    document.getElementById('free-tools').textContent = freeTools;
}

// Render the tools table
function renderTable() {
    toolsTbody.innerHTML = '';
    
    if (filteredTools.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="7" style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">No tools match your current filters</td>';
        toolsTbody.appendChild(row);
        resultsCount.textContent = 'No tools found';
        return;
    }

    filteredTools.forEach(tool => {
        const row = document.createElement('tr');
        
        // Format free tier badge
        let freeTierBadge = '';
        const freeTierText = tool.free_tier.toLowerCase();
        if (freeTierText.includes('yes') && freeTierText.includes('limited')) {
            freeTierBadge = '<span class="free-tier-badge free-tier-badge--limited">Limited</span>';
        } else if (freeTierText.includes('yes')) {
            freeTierBadge = '<span class="free-tier-badge free-tier-badge--yes">Yes</span>';
        } else {
            freeTierBadge = '<span class="free-tier-badge free-tier-badge--no">No</span>';
        }

        row.innerHTML = `
            <td><a href="#" class="tool-name" data-tool-name="${tool.name}">${tool.name}</a></td>
            <td>${tool.category}</td>
            <td>${tool.pricing}</td>
            <td><span class="vibe-score">${tool.vibe_score}</span></td>
            <td>${tool.company}</td>
            <td>${tool.launch_year}</td>
            <td>${freeTierBadge}</td>
        `;
        
        toolsTbody.appendChild(row);
    });

    resultsCount.textContent = `Showing ${filteredTools.length} of ${toolsData.length} tools`;
    updateStatistics();
}

// Apply all filters
function applyFilters() {
    filteredTools = toolsData.filter(tool => {
        // Search filter
        if (currentFilters.search) {
            const searchTerm = currentFilters.search.toLowerCase();
            const searchableText = [
                tool.name,
                tool.description,
                tool.key_features,
                tool.company
            ].join(' ').toLowerCase();
            
            if (!searchableText.includes(searchTerm)) {
                return false;
            }
        }

        // Category filter
        if (currentFilters.category && tool.category !== currentFilters.category) {
            return false;
        }

        // Free tier filter
        if (currentFilters.freeTier) {
            const hasFreeTier = tool.free_tier.toLowerCase().includes('yes');
            if (currentFilters.freeTier === 'yes' && !hasFreeTier) {
                return false;
            }
            if (currentFilters.freeTier === 'no' && hasFreeTier) {
                return false;
            }
        }

        // Year filter
        if (currentFilters.year) {
            const toolYear = parseInt(tool.launch_year);
            const filterYear = parseInt(currentFilters.year.replace('+', ''));
            if (toolYear < filterYear) {
                return false;
            }
        }

        return true;
    });

    // Apply current sort
    if (currentSort.column) {
        sortTools(currentSort.column, currentSort.direction);
    }

    renderTable();
    saveUserPreferences();
}

// Sort tools
function sortTools(column, direction = null) {
    if (!direction) {
        // Toggle sort direction
        if (currentSort.column === column) {
            direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            direction = 'asc';
        }
    }

    currentSort = { column, direction };

    filteredTools.sort((a, b) => {
        let valueA = a[column];
        let valueB = b[column];

        // Special handling for different data types
        if (column === 'vibe_score') {
            valueA = parseFloat(valueA.split('/')[0]);
            valueB = parseFloat(valueB.split('/')[0]);
        } else if (column === 'launch_year') {
            valueA = parseInt(valueA);
            valueB = parseInt(valueB);
        } else if (column === 'free_tier') {
            // Sort free tier: Yes first, then limited, then no
            const order = { 'yes': 0, 'yes (limited)': 1, 'yes (beta)': 1, 'yes (generous)': 0 };
            valueA = order[valueA.toLowerCase()] ?? 2;
            valueB = order[valueB.toLowerCase()] ?? 2;
        } else {
            valueA = valueA.toString().toLowerCase();
            valueB = valueB.toString().toLowerCase();
        }

        let comparison = 0;
        if (valueA > valueB) comparison = 1;
        if (valueA < valueB) comparison = -1;

        return direction === 'desc' ? -comparison : comparison;
    });

    // Update sort indicators
    document.querySelectorAll('.sort-indicator').forEach(indicator => {
        indicator.className = 'sort-indicator';
    });

    const currentHeader = document.querySelector(`[data-column="${column}"] .sort-indicator`);
    if (currentHeader) {
        currentHeader.className = `sort-indicator ${direction}`;
    }

    renderTable();
}

// Show tool details modal
function showToolDetails(toolName) {
    const tool = toolsData.find(t => t.name === toolName);
    if (!tool) return;

    modalTitle.textContent = tool.name;
    
    toolDetails.innerHTML = `
        <div class="detail-section">
            <h4>Overview</h4>
            <p>${tool.description}</p>
        </div>

        <div class="detail-section">
            <h4>Key Information</h4>
            <div class="detail-grid">
                <div class="detail-item">
                    <span class="detail-label">Category</span>
                    <span class="detail-value">${tool.category}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Company</span>
                    <span class="detail-value">${tool.company}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Launch Year</span>
                    <span class="detail-value">${tool.launch_year}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Vibe Score</span>
                    <span class="detail-value">${tool.vibe_score}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Pricing</span>
                    <span class="detail-value">${tool.pricing}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Free Tier</span>
                    <span class="detail-value">${tool.free_tier}</span>
                </div>
            </div>
        </div>

        <div class="detail-section">
            <h4>Technical Details</h4>
            <div class="detail-grid">
                <div class="detail-item">
                    <span class="detail-label">Deployment</span>
                    <span class="detail-value">${tool.deployment}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">AI Models</span>
                    <span class="detail-value">${tool.ai_models}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Languages Supported</span>
                    <span class="detail-value">${tool.languages_supported}</span>
                </div>
            </div>
        </div>

        <div class="detail-section">
            <h4>Key Features</h4>
            <p>${tool.key_features}</p>
        </div>

        <div class="detail-section">
            <h4>Best For</h4>
            <p>${tool.best_for}</p>
        </div>
    `;

    toolModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hide tool details modal
function hideToolDetails() {
    toolModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Export to CSV
function exportToCSV() {
    const headers = ['Name', 'Category', 'Description', 'Pricing', 'Company', 'Launch Year', 'Free Tier', 'Vibe Score'];
    const csvContent = [
        headers.join(','),
        ...filteredTools.map(tool => [
            `"${tool.name}"`,
            `"${tool.category}"`,
            `"${tool.description}"`,
            `"${tool.pricing}"`,
            `"${tool.company}"`,
            tool.launch_year,
            `"${tool.free_tier}"`,
            `"${tool.vibe_score}"`
        ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vibe-coding-tools-2025.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

// Save user preferences
function saveUserPreferences() {
    try {
        const preferences = {
            filters: currentFilters,
            sort: currentSort
        };
        localStorage.setItem('vibeToolsPreferences', JSON.stringify(preferences));
    } catch (e) {
        // Ignore localStorage errors in sandboxed environments
    }
}

// Load user preferences
function loadUserPreferences() {
    try {
        const saved = localStorage.getItem('vibeToolsPreferences');
        if (saved) {
            const preferences = JSON.parse(saved);
            currentFilters = { ...currentFilters, ...preferences.filters };
            currentSort = preferences.sort || currentSort;

            // Apply saved filters to UI
            searchInput.value = currentFilters.search || '';
            categoryFilter.value = currentFilters.category || '';
            freeTierFilter.value = currentFilters.freeTier || '';
            yearFilter.value = currentFilters.year || '';

            updateSearchClearButton();
            applyFilters();
        }
    } catch (e) {
        // Ignore localStorage errors in sandboxed environments
    }
}

// Update search clear button visibility
function updateSearchClearButton() {
    const searchGroup = searchInput.parentElement;
    if (searchInput.value.trim()) {
        searchGroup.classList.add('has-content');
    } else {
        searchGroup.classList.remove('has-content');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', function() {
        currentFilters.search = this.value.trim();
        updateSearchClearButton();
        applyFilters();
    });

    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        currentFilters.search = '';
        updateSearchClearButton();
        applyFilters();
    });

    // Filter controls
    categoryFilter.addEventListener('change', function() {
        currentFilters.category = this.value;
        applyFilters();
    });

    freeTierFilter.addEventListener('change', function() {
        currentFilters.freeTier = this.value;
        applyFilters();
    });

    yearFilter.addEventListener('change', function() {
        currentFilters.year = this.value;
        applyFilters();
    });

    // Reset filters
    resetFiltersBtn.addEventListener('click', function() {
        currentFilters = { search: '', category: '', freeTier: '', year: '' };
        currentSort = { column: null, direction: null };
        
        searchInput.value = '';
        categoryFilter.value = '';
        freeTierFilter.value = '';
        yearFilter.value = '';
        
        updateSearchClearButton();
        
        // Clear sort indicators
        document.querySelectorAll('.sort-indicator').forEach(indicator => {
            indicator.className = 'sort-indicator';
        });
        
        filteredTools = [...toolsData];
        renderTable();
        saveUserPreferences();
    });

    // Table sorting
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', function() {
            const column = this.dataset.column;
            sortTools(column);
        });
    });

    // Tool name clicks (event delegation)
    toolsTbody.addEventListener('click', function(e) {
        if (e.target.classList.contains('tool-name')) {
            e.preventDefault();
            const toolName = e.target.dataset.toolName;
            showToolDetails(toolName);
        }
    });

    // Modal controls
    modalClose.addEventListener('click', hideToolDetails);
    modalBackdrop.addEventListener('click', hideToolDetails);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && toolModal.classList.contains('active')) {
            hideToolDetails();
        }
    });

    // Export and print
    exportBtn.addEventListener('click', exportToCSV);
    printBtn.addEventListener('click', function() {
        window.print();
    });
}