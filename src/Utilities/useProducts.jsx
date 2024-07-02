import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {

    const axiosPublic = useAxiosPublic();

    const { data: item = [], isLoading, refetch } = useQuery({
        queryKey: ['item'],
        queryFn: async () => {
            const res = await axiosPublic.get('/item')
            return res.data;
        }
    });

    return [item, isLoading, refetch];
};

export default useProducts;