import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Header, List } from "semantic-ui-react";
import "./App.css";

function App() {
  const [activities, setActivities] = useState([]);

  const fetchActivities = useCallback(async () => {
    const response = await axios.get("http://localhost:5000/api/activities");
    setActivities(response.data);
  }, []);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  return (
    <>
      <Header as="h2" icon={"users"} content="Reactivities" />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </>
  );
}

export default App;
