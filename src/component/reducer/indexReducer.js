import boy1 from "../Img/boy1.jpg";
import boy2 from "../Img/boy2.jpg";
import boy3 from "../Img/boy3.jpg";
import boy4 from "../Img/boy4.jpg";
import girl1 from "../Img/girl1.jpg";
import girl2 from "../Img/girl2.jpg";
import deleted from "../Img/delete.png"
import lock from "../Img/lock.png";




const data = {
  list: [
    {
      name: "George Bluth",
      email: "george.bluth@reqres.in",
      src: boy1,
      status: "Active",
      access: "owner",
      progress: 25,
      icon: lock
    },
    {
      name: "Janet Weaver",
      email: "janet.weaver@reqres.in",
      src: girl1,
      status: "Inactive",
      access: "owner",
      progress: 20,
      icon: deleted
    },
    {
      name: "Emma wong",
      email: "emma.wong@reqres.in",
      src: girl2,
      status: "Inactive",
      access: "owner",
      progress: 55,
      icon: deleted
    },
    {
      name: "Eve Holt",
      email: "eve.jolt@reqres.in",
      src: boy2,
      status: "Inactive",
      access: "owner",
      progress: 75,
      icon: deleted
    },
    {
      name: "Charles Morris",
      email: "charles.morris@reqres.in",
      src: boy3,
      status: "Inactive",
      access: "owner",
      progress: 66,
      icon: deleted
    },
    {
      name: "Tracey Ramos",
      email: "tracey.ramos@reqres.in",
      src: boy4,
      status: "Inactive",
      access: "owner",
      progress: 70,
      icon: deleted
    },
  ],
  list1:[],
  modalToggle: false,
};
const indexReducer = (state = data, action) => {
  switch (action.type) {
    case "showdata":
      console.log(action.payload, "data");
      return [...state];
     case "showmodal":
      const newToggle = !state.modalToggle;
      const hoverData = state.list.filter(
        (item, index) => index === action.payload
      );
      console.log(state)
      return {
        ...state,
        modalToggle: newToggle,
        hoverData: hoverData,
      };

    default:
      return state;
  }
};

export default indexReducer;
