import { peek } from "@laufire/utils/debug";

const setIndex=(context)=>({
 index:peek(context.data),
});
const actions ={
  setIndex,
};
export default actions;