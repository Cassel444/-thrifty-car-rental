import { InfinitySpin } from "react-loader-spinner";

function Loader() {
  return (
    <InfinitySpin
      visible={true}
      width="200"
      color="#D84343"
      ariaLabel="infinity-spin-loading"
      />
  );
}
export default Loader;