import { useState } from 'react';

export default function ArchitectureStyles() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  
  const architectureCategories = [
    {
      title: "Traditional Software Architectures",
      icon: "🏢",
      items: [
        { 
          name: "Monolithic", 
          icon: "🏢", 
          description: "All-in-one systems where components are interconnected and interdependent",
          useCase: "Small to medium applications with simple scaling needs, startups with limited resources, or applications where simplicity and rapid development are prioritized over scalability."
        },
        { 
          name: "Layered", 
          icon: "📚", 
          description: "Organized horizontal tiers with clear data flow and separation of concerns",
          useCase: "Enterprise applications requiring clear separation between presentation, business logic, and data access layers, such as traditional banking systems or ERP applications."
        },
        { 
          name: "MVC/MVP/MVVM", 
          icon: "🖼️", 
          description: "Clean separation between UI, business logic, and data models",
          useCase: "Applications with complex user interfaces that need to be frequently updated or maintained, like web applications, mobile apps, or desktop software with rich UIs."
        },
        { 
          name: "Domain-Driven Design", 
          icon: "🧩", 
          description: "Business-aligned design focusing on the core domain logic",
          useCase: "Complex business domains with intricate rules and workflows, such as insurance systems, financial platforms, or logistics applications where domain expertise is critical."
        },
        { 
          name: "Hexagonal", 
          icon: "🔌", 
          description: "Adaptable core logic with ports and adapters for flexible I/O",
          useCase: "Systems requiring independence from external services or infrastructure, making them easy to test and adapt to changing requirements, like payment processing systems."
        },
        { 
          name: "Clean/Onion", 
          icon: "🧅", 
          description: "Concentric layers with dependencies pointing inward for better control",
          useCase: "Enterprise applications requiring high maintainability and testability, where business rules need protection from external changes, such as medical systems."
        },
        { 
          name: "Component-Based", 
          icon: "📦", 
          description: "Modular, reusable components with well-defined interfaces",
          useCase: "Large-scale applications with repeating UI patterns, like content management systems, e-commerce platforms, or applications requiring consistent design language."
        }
      ]
    },
    {
      title: "Data-Centric Architectures",
      icon: "💾",
      items: [
        { 
          name: "Data-Centric", 
          icon: "💾", 
          description: "Design that prioritizes data structures and flow over functionality",
          useCase: "Systems where data integrity and structure are paramount, such as scientific research platforms, financial reporting systems, or data warehousing solutions."
        },
        { 
          name: "Lambda Architecture", 
          icon: "λ", 
          description: "Parallel batch and speed layers for comprehensive data processing",
          useCase: "Big data applications requiring both real-time analytics and comprehensive batch processing, like social media analytics platforms or IoT monitoring systems."
        },
        { 
          name: "Kappa Architecture", 
          icon: "κ", 
          description: "Stream-first approach eliminating batch processing complexity",
          useCase: "Real-time data processing systems where stream processing can handle both historical and real-time data needs, such as fraud detection or real-time recommendations."
        },
        { 
          name: "Data Mesh", 
          icon: "🕸️", 
          description: "Domain-oriented, decentralized data ownership and governance",
          useCase: "Large enterprises with multiple domains requiring autonomous data management, like conglomerates with diverse business units or organizations with federated data governance."
        },
        { 
          name: "Data Lakehouse", 
          icon: "🏠", 
          description: "Hybrid combining data lake flexibility with warehouse structure",
          useCase: "Organizations needing both the flexibility of data lakes and the performance of data warehouses, such as retail analytics or healthcare data platforms."
        },
        { 
          name: "Data Fabric", 
          icon: "🧵", 
          description: "Integrated data management across distributed environments",
          useCase: "Global enterprises with data spread across multiple platforms, clouds, and locations requiring unified governance and access, like multinational corporations."
        }
      ]
    },
    {
      title: "Distributed & Scalable Architectures",
      icon: "🌐",
      items: [
        { 
          name: "Microservices", 
          icon: "🔬", 
          description: "Independent, loosely-coupled services focused on specific functions",
          useCase: "Large-scale applications requiring independent deployment and scaling of components, like e-commerce platforms, streaming services, or banking applications."
        },
        { 
          name: "Serverless", 
          icon: "☁️", 
          description: "Event-triggered functions without explicitly managing infrastructure",
          useCase: "Applications with variable workloads, infrequent processing needs, or specific event-driven operations, such as image processing, scheduled tasks, or webhook handlers."
        },
        { 
          name: "Space-Based", 
          icon: "🌌", 
          description: "In-memory distributed computing for high scalability",
          useCase: "Applications requiring extreme performance and resilience, like trading platforms, gaming backends, or real-time bidding systems handling massive concurrent operations."
        },
        { 
          name: "Microkernel", 
          icon: "⚙️", 
          description: "Minimal core with pluggable extensions for flexibility",
          useCase: "Systems requiring high extensibility through plugins or modules, such as IDEs, browser architectures, or content management systems with extensive customization needs."
        },
        { 
          name: "Event-Driven", 
          icon: "⚡", 
          description: "Systems reacting to events for real-time processing capabilities",
          useCase: "Applications requiring immediate response to state changes, like IoT platforms, trading systems, monitoring tools, or real-time collaboration software."
        },
        { 
          name: "CQRS", 
          icon: "⚖️", 
          description: "Separate command and query paths optimized for their specific purposes",
          useCase: "Systems with significant imbalance between read and write operations, like e-commerce platforms with complex inventory management or financial reporting systems."
        },
        { 
          name: "Distributed", 
          icon: "🌐", 
          description: "Workloads spread across multiple networked computers",
          useCase: "Applications requiring massive processing power, fault tolerance, or geographic distribution, such as global search engines, content delivery networks, or distributed databases."
        },
        { 
          name: "Peer-to-Peer", 
          icon: "👥", 
          description: "Direct node-to-node communication without central coordination",
          useCase: "Systems benefiting from decentralization like file sharing applications, cryptocurrency networks, or distributed computing projects where central servers are impractical."
        }
      ]
    },
    {
      title: "Communication Patterns",
      icon: "📡",
      items: [
        { 
          name: "Pub-Sub", 
          icon: "📡", 
          description: "Publishers emit events to subscribers for decoupled communication",
          useCase: "Systems with many-to-many communication needs or where publishers don't need to know subscribers, like notification systems, chat applications, or stock market feeds."
        },
        { 
          name: "Request-Response", 
          icon: "🔄", 
          description: "Direct synchronous communication pattern between services",
          useCase: "Applications requiring immediate confirmations or results, such as user authentication, payment processing, or interactive web applications where waiting is acceptable."
        },
        { 
          name: "Message Queue", 
          icon: "📩", 
          description: "Asynchronous communication with buffered message passing",
          useCase: "Systems handling high volumes of requests or requiring task distribution, like order processing systems, email delivery services, or batch processing applications."
        },
        { 
          name: "API Gateway", 
          icon: "🚪", 
          description: "Single entry point managing routing and API aggregation",
          useCase: "Applications with multiple backend services that need unified access controls, monitoring, or client-specific API adaptations, like B2B platforms or mobile app backends."
        },
        { 
          name: "Service Mesh", 
          icon: "🕸️", 
          description: "Infrastructure layer handling service-to-service communication",
          useCase: "Large microservice deployments requiring sophisticated traffic management, security, and observability without modifying service code, like cloud-native applications."
        }
      ]
    },
    {
      title: "AI-Specific Architectures",
      icon: "🤖",
      items: [
        { 
          name: "Model-Serving", 
          icon: "🔮", 
          description: "Patterns for efficiently deploying and serving ML models at scale",
          useCase: "Production AI systems requiring reliable, scalable inference capabilities, such as recommendation engines, content moderation systems, or predictive maintenance applications."
        },
        { 
          name: "Feature Store", 
          icon: "🗃️", 
          description: "Centralized repository managing ML features for training and inference",
          useCase: "Organizations with multiple ML models that need consistent feature computation and sharing, like financial risk modeling, large e-commerce platforms, or enterprise AI initiatives."
        },
        { 
          name: "MLOps Pipeline", 
          icon: "🔄", 
          description: "End-to-end lifecycle management for ML model development",
          useCase: "Data science teams requiring reproducible model training, validation, and deployment processes, such as autonomous vehicle systems or clinical decision support tools."
        },
        { 
          name: "Agent-Based", 
          icon: "🤖", 
          description: "Multiple autonomous agents collaborating toward objectives",
          useCase: "Complex systems modeling, autonomous robot teams, digital assistants, or simulations where multiple independent entities need to interact and collaborate."
        },
        { 
          name: "Model Context Protocol", 
          icon: "🧠", 
          description: "Framework managing contextual information in AI systems",
          useCase: "Conversational AI, multi-turn interactions, or systems requiring memory of previous states and inputs, such as virtual assistants, customer support bots, or context-aware recommenders."
        },
        { 
          name: "RAG", 
          icon: "📚", 
          description: "Retrieval-Augmented Generation combining search with generative models",
          useCase: "Knowledge-intensive applications requiring factual grounding, like customer support systems, domain-specific assistants, or enterprise search tools enhanced with generative capabilities."
        },
        { 
          name: "Actor-Critic", 
          icon: "🎭", 
          description: "Reinforcement learning with separate policy and value networks",
          useCase: "Systems learning from environment feedback, such as game AI, robotic control systems, resource optimization problems, or autonomous trading strategies."
        },
        { 
          name: "Transformer", 
          icon: "🔍", 
          description: "Self-attention mechanisms enabling context-aware processing",
          useCase: "Natural language processing, machine translation, content generation, or any application requiring understanding of sequential data with complex dependencies."
        },
        { 
          name: "Federated Learning", 
          icon: "🔒", 
          description: "Distributed ML preserving data privacy across organizations",
          useCase: "Applications requiring model training across distributed data sources without centralizing sensitive data, like healthcare analytics, mobile keyboard prediction, or financial consortiums."
        },
        { 
          name: "Neural Architecture Search", 
          icon: "🔎", 
          description: "Automated discovery of optimal neural network designs",
          useCase: "Research teams or organizations seeking optimized model architectures for specific tasks, resource constraints, or performance objectives, like edge AI or specialized computer vision systems."
        },
        { 
          name: "Fine-tuning Architecture", 
          icon: "🎯", 
          description: "Systems adapting pre-trained models to specific tasks",
          useCase: "Organizations leveraging large foundation models for specific applications, like domain-specific chatbots, specialized content classifiers, or industry-specific text analysis."
        },
        { 
          name: "Multi-modal", 
          icon: "🔀", 
          description: "Integrated processing of multiple data types (text, image, audio)",
          useCase: "Applications processing diverse input types together, such as content recommendation systems, medical diagnosis tools combining imaging and text reports, or multimedia analysis platforms."
        }
      ]
    },
    {
      title: "Hybrid Approaches",
      icon: "🔄",
      items: [
        { 
          name: "Hybrid Cloud", 
          icon: "☁️", 
          description: "Mixed deployment across public and private cloud environments",
          useCase: "Organizations with varying security, compliance, or performance requirements across applications, like financial institutions or healthcare providers balancing sensitive and non-sensitive workloads."
        },
        { 
          name: "Polyglot Persistence", 
          icon: "🗄️", 
          description: "Multiple database types optimized for specific data needs",
          useCase: "Applications with diverse data storage requirements, such as e-commerce platforms using relational databases for transactions, document stores for product catalogs, and graph databases for recommendations."
        },
        { 
          name: "Orchestration-Based", 
          icon: "🎼", 
          description: "Coordinated management of distributed components",
          useCase: "Complex distributed systems requiring centralized coordination, like container-based microservices, multi-step data processing pipelines, or cloud resource management."
        },
        { 
          name: "Edge-Cloud", 
          icon: "📱", 
          description: "Processing distributed across edge devices and cloud infrastructure",
          useCase: "IoT ecosystems, content delivery networks, or applications requiring both local responsiveness and centralized processing/storage, like smart city infrastructure or autonomous vehicle networks."
        }
      ]
    }
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
    setExpandedItem(null);
  };

  const toggleItem = (categoryIndex, itemIndex) => {
    const newExpandedItem = expandedItem && 
                            expandedItem.categoryIndex === categoryIndex && 
                            expandedItem.itemIndex === itemIndex ? 
                              null : 
                              { categoryIndex, itemIndex };
    setExpandedItem(newExpandedItem);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">40 Architecture Styles for Data, Software & AI</h1>
      <p className="text-center mb-8 text-gray-700">Click on categories to expand, and architecture styles for details</p>
      
      <div className="space-y-4">
        {architectureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="border border-gray-300 rounded-lg bg-white overflow-hidden">
            <div 
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-blue-50"
              onClick={() => toggleCategory(categoryIndex)}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
              <span className="text-xl">{expandedCategory === categoryIndex ? '▼' : '▶'}</span>
            </div>
            
            {expandedCategory === categoryIndex && (
              <div className="border-t border-gray-200">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-100 last:border-b-0">
                    <div 
                      className={`flex items-center p-3 cursor-pointer hover:bg-gray-50 ${
                        expandedItem && 
                        expandedItem.categoryIndex === categoryIndex && 
                        expandedItem.itemIndex === itemIndex ? 
                          'bg-gray-50' : ''
                      }`}
                      onClick={() => toggleItem(categoryIndex, itemIndex)}
                    >
                      <span className="text-xl mr-3">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                      <span className="ml-auto text-sm">
                        {expandedItem && 
                         expandedItem.categoryIndex === categoryIndex && 
                         expandedItem.itemIndex === itemIndex ? '▼' : '▶'}
                      </span>
                    </div>
                    
                    {expandedItem && 
                     expandedItem.categoryIndex === categoryIndex && 
                     expandedItem.itemIndex === itemIndex && (
                      <div className="p-4 bg-blue-50 border-t border-gray-200">
                        <p className="mb-3"><strong>Description:</strong> {item.description}</p>
                        <p><strong>Use Cases:</strong> {item.useCase}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-100 rounded-lg border border-blue-200">
        <h3 className="font-bold text-lg mb-2">💡 Pro Tip for Architects</h3>
        <p>Consider hybrid approaches combining multiple architectural styles. For example, integrating microservices with event-driven patterns can provide both scalability for data processing and real-time capabilities essential for responsive AI systems.</p>
      </div>
      
      <div className="mt-6 text-center text-gray-700">
        <p className="font-bold">Which architectural pattern has been most transformative for your organization?</p>
        <p className="mt-2 text-sm">#SoftwareArchitecture #AIEngineering #DataSystems</p>
      </div>
    </div>
  );
}
