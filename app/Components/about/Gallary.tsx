export default function Gallery() {
      return (
        <>
        <h1 className="text-center lg:mt-20 -mt-6 lg:text-4xl text-2xl font-bold text-gray-800">
        Image Gallery
      </h1>
          <div className="max-w-[75rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-10 mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              <div className="space-y-2">
                <img
                  className="w-full h-24 sm:h-32 lg:h-40 object-cover"
                  src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Gallery Masonry Image"
                />
                <img
                  className="w-full h-24 sm:h-32 lg:h-40 object-cover"
                  src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Gallery Masonry Image"
                />
                <img
                  className="w-full h-20 sm:h-24 lg:h-32 object-cover"
                  src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Gallery Masonry Image"
                />
              </div>
              <div className="space-y-2">
                <img
                  className="w-full h-24 sm:h-32 lg:h-36 object-cover"
                  src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Gallery Masonry Image"
                />
                <img
                  className="w-full h-32 sm:h-24 lg:h-80 object-cover"
                  src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Gallery Masonry Image"
                />
              </div>
              <div className="space-y-2">
                <img
                  className="w-full h-24 sm:h-32 lg:h-40 object-cover"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Gallery Masonry Image"
                />
                <img
                  className="w-full h-20 sm:h-24 lg:h-32 object-cover"
                  src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Gallery Masonry Image"
                />
                <img
                  className="w-full h-24 sm:h-32 lg:h-40 object-cover"
                  src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Gallery Masonry Image"
                />
              </div>
              <div className="space-y-2">
                <img
                  className="w-full h-24 sm:h-32 lg:h-72 object-cover"
                  src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Gallery Masonry Image"
                />
                <img
                  className="w-full h-20 sm:h-24 lg:h-44 object-cover"
                  src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Gallery Masonry Image"
                />
              </div>
            </div>
          </div>
        </>
      );
    }
    