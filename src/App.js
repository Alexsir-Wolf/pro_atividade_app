import { useState } from "react";
import "./App.css";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

let initialState = [
    {
        id: 1,
        priority: "1",
        title: "Título",
        description: "Primeira atividade",
    },
    {
        id: 2,
        priority: "2",
        title: "Título",
        description: "Segunda atividade",
    },
];
function App() {
    const [activities, setActivities] = useState(initialState);
    const [activity, setActivity] = useState({});

    function addActivity(e) {
        e.preventDefault();

        const activity = {
            id: document.getElementById("id").value,
            priority: document.getElementById("priority").value,
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
        };
        setActivities([...activities, { ...activity }]);
    }

    function deleteActivity(id) {
        const activityFilters = activities.filter(
            (activity) => activity.id !== id
        );
        setActivities([...activityFilters]);
    }

    function getActivity(id){
        const activity = activities.filter((activity) => activity.id === id);
        setActivity(activity[0])
    }

    return (
        <>
            <ActivityForm 
                addActivity={addActivity} 
                activities={activities}
                activitySetected={activity}
            />
            <ActivityList 
                activities={activities}
                deleteActivity={deleteActivity}
                getActivity={getActivity}
            />
        </>
    );
}

export default App;
