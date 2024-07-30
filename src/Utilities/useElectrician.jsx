import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useElectrician = () => {

    const axiosPublic = useAxiosPublic();

    const { data: electrician = [] } = useQuery({
        queryKey: ['electrician'],
        queryFn: async () => {
            const res = await axiosPublic.get('/electricians')
            return res.data
        }
    })

    return [electrician]
};

export default useElectrician;