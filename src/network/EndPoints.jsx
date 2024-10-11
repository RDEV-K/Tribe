const EndPoints = {
    integration: {
      login: "/api/login",
      getbrokers:"/api/partners",
      createBroker:"/api/partners",
      getBrokerById:(slug) => `/api/partners/${slug}`,
      getClients:"/api/fetch_customers",
      brokerIntegration:"/api/integrations",
      brokerIntergationById:(slug) => `api/integration-search?partner_id=${slug}`
    },
  };
  
  export default EndPoints;