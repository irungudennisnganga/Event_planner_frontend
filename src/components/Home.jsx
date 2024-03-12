
const Home = () => {
  return (
    <div className="bg-gray-100">
      <section className="hero flex items-center justify-between px-4 py-16">
        <div className="hero-content max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Event Planner App</h1>
          <p className="text-lg text-gray-700 mb-8">Your one-stop solution for organizing memorable events!</p>
          <a href="/signup" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Get Started</a>
        </div>
        <img src='https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Event Planner" className="w-96" />
      </section>

      <section className="benefits container mx-auto py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of using Event Planner App</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="benefit">
            <img src='https://images.pexels.com/photos/7070912/pexels-photo-7070912.jpeg?auto=compress&cs=tinysrgb&w=600'alt="Benefit 1" className="w-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Event Organization</h3>
            <p>Effortlessly plan and manage all aspects of your event in one place.</p>
          </div>
          <div className="benefit">
            <img src='https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Benefit 2" className="w-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customizable Templates</h3>
            <p>Choose from a variety of customizable templates to suit your events theme.</p>
          </div>
          <div className="benefit">
            <img src='https://images.pexels.com/photos/6518863/pexels-photo-6518863.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Benefit 3" className="w-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaborative Planning</h3>
            <p>Invite collaborators and work together seamlessly to create the perfect event.</p>
          </div>
        </div>
      </section>

      <section className="user-stories bg-white py-16">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">User Stories</h2>
          <div className="flex justify-between mb-8 px-2.5" >
            <div className="user-story-container px-0.5 bg-gray-200 p-6 rounded-lg flex items-center px-0.5">
              <img src='https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600' alt="User 1" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Janes Birthday Bash</h3>
                <p className="text-gray-700">As a busy professional, Jane used our app to effortlessly plan her birthday party, from sending invitations to coordinating with vendors.</p>
              </div>
            </div><br />
            <div className="user-story-container bg-gray-200 p-6 rounded-lg flex items-center px-0.5">
              <img src='https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600' alt="User 2" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Corporate Event Success</h3>
                <p className="text-gray-700">John, an event manager, relied on our app to smoothly organize a corporate event, impressing clients and attendees alike.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
