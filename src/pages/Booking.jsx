import { useParams } from 'react-router-dom';

const Booking = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Booking Page for Car ID: {id}</h2>
      
    </div>
  );
};

export default Booking;
