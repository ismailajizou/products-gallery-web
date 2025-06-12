import type { FunctionComponent } from 'react'



const CardSkeleton: FunctionComponent = () => {
  return (
    <div className="relative max-w-sm animate-pulse rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
      {/* Heart Icon Skeleton */}
      <div className="absolute top-2 right-2 z-10 rounded-full bg-gray-200 p-2 shadow-sm">
        <div className="h-5 w-5 rounded-full bg-gray-300" />
      </div>

      <div className="flex flex-col">
        {/* Product Image Skeleton */}
        <div className="relative mb-3">
          <div className="h-48 w-full rounded-lg bg-gray-200"></div>
        </div>

        {/* Product Info Skeleton */}
        <div className="flex flex-col gap-2">
          {/* Category Skeleton */}
          <div className="h-3 w-20 rounded bg-gray-200"></div>

          {/* Title Skeleton */}
          <div className="space-y-1">
            <div className="h-4 w-full rounded bg-gray-200"></div>
            <div className="h-4 w-3/4 rounded bg-gray-200"></div>
          </div>

          {/* Description Skeleton */}
          <div className="space-y-1">
            <div className="h-3 w-full rounded bg-gray-200"></div>
            <div className="h-3 w-5/6 rounded bg-gray-200"></div>
          </div>

          {/* Price Skeleton */}
          <div className="mt-2">
            <div className="h-6 w-16 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSkeleton
