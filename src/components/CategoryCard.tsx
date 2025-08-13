
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/types/product';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/category/${category.id}`}>
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
              <p className="text-sm opacity-90">{category.productCount} products</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
