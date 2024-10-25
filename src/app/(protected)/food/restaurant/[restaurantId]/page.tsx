type RestaurantDetailPageProps = {
  params: {
    restaurantId: string;
  };
};

export default function RestaurantDetailPage({ params }: RestaurantDetailPageProps) {
    const { restaurantId } = params;
    return <>{restaurantId}</>;
}