import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const withLoading = (WrappedComponent, url) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url);

          if (!res.ok) {
            throw new Error(`HTTP Error : ${res.status}`);
          }

          const result = await res.json();
          setData(result);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [url]);

    if (loading)
      return (
        <div>
          <Loader />
        </div>
      );
    if (error) return <div>{error.message}</div>;
    if (data.length === 0) return <div>No data found.</div>;

    return <WrappedComponent {...props} data={data} />;
  };
};

export default withLoading;
