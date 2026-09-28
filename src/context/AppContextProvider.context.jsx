import { useState } from "react";
import { AppContext } from "./AppContext.context.jsx";
import toast from "react-hot-toast";
import { submitUserInput } from "../services/submitUserInput.services.js";

const AppContextProvider = ({ children }) => {
  const [formStage, setFormStage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    mainGoals: [],
    experience: "",
    availability: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    budget: "",
    message: "",
    username: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormData = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const slideForm = (flag) => {
    if (flag === "prev" && formStage > 1) {
      setFormStage(formStage - 1);
    } else if (flag === "next" && formStage < 3) {
      setFormStage(formStage + 1);
    } else {
      setFormStage(1);
    }
  };

  const setGoal = (goal) => {
    let newGoals = [...formData.mainGoals];

    if (newGoals.includes(goal)) {
      newGoals = newGoals.filter((g) => g != goal);
    } else {
      newGoals.push(goal);
    }

    setFormData({ ...formData, mainGoals: newGoals });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await submitUserInput(formData);

      if (response.success) {
        toast.success(response.message);
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          mainGoals: [],
          experience: "",
          availability: "",
          age: "",
          gender: "",
          weight: "",
          height: "",
          budget: "",
          message: "",
          username: "",
        });
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    formStage,
    slideForm,
    formData,
    handleFormData,
    setGoal,
    handleSubmit,
    error,
    loading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
