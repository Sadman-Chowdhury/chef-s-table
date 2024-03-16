import Current from '../Current/Current';

const CurrentlyCooking = ({currentlyCooking}) => {
  return (
    <div className='border rounded-2xl text-center space-y-4 pt-5'>
      <h2 className='text-2xl font-semibold'>Currently Cooking: {currentlyCooking.length}</h2>
      <hr className='mx-10' />
      <table className='space-y-5'>
        <thead className='text-[#878787]'>
          <tr>
            <td></td><td>Name</td><td className='pr-2'>Time</td><td>Calories</td>
          </tr>
        </thead>
        <tbody className='text-[#282828B3]'>
          {currentlyCooking.map((current, idx) => (
            <Current key={idx} current={current} idx={idx}></Current>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentlyCooking;
