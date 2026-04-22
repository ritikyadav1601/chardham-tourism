export default function Loading() {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">🕉️</div>
          <div className="text-amber-700 font-medium">Loading your sacred journey...</div>
          <div className="mt-4 w-32 h-1 bg-orange-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-orange-500 rounded-full animate-pulse" style={{width:'60%'}}></div>
          </div>
        </div>
      </div>
    );
  }