import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="landingpage">
      <nav className="landing_nav">
        <img src="/logo3.png" />
        <ul>
          <li>
            <NavLink>Login</NavLink>
          </li>
          <li>
            <NavLink>Signup</NavLink>
          </li>
        </ul>
      </nav>
      <div className="landing_body">
        <div className="landing_content">
          <h1>Beyond the Book: Discover, Discuss, and Dive Deeper with Prose & Pages</h1>
          <p>Turn the Page to New Adventures: Join Our Community of Book Enthusiasts.</p>
          <button>Join Today</button>
        </div>
        <div className="landing_image">
          <img src="/cozy.jpg" />
        </div>
      </div>
      <div className="landing_features">
        <h2>Why Join Prose & Pages?</h2>
        <div className="feature_cards">
          <div className="card">
            <i className="fa-solid fa-earth-americas"></i>
            <h3>Discover Diverse Genres</h3>
            <p>
              Prose & Pages offers an extensive range of books that cater to all tastes and preferences, ensuring you always find something intriguing
              to read.
            </p>
          </div>
          <div className="card">
            <i className="fa-solid fa-comments"></i>
            <h3>Engage in Thoughtful Discussions</h3>
            <p>
              Join lively discussions and share your insights on a variety of topics. Our discussion rooms are designed to deepen your understanding
              and appreciation of literature.
            </p>
          </div>

          <div className="card">
            <i className="fa-solid fa-people-group"></i>
            <h3>Meet Like-Minded Book Lovers</h3>
            <p>
              Connect with people who share your passion for reading. A community where friendships are formed over shared stories and where every
              book you read brings you closer to fellow enthusiasts around the world.
            </p>
          </div>
          <div className="card">
            <i className="fa-solid fa-book-open-reader"></i>
            <h3>Flexible Reading Schedules</h3>
            <p>
              Our flexible schedule options allow you to participate at your own
              pace. Enjoy books according to your lifestyle without the pressure of deadlines.
            </p>
          </div>
          <div className="card">
            <i className="fa-solid fa-signal"></i>
            <h3>Participate Anywhere, Anytime</h3>
            <p>
              Our platform is designed for accessibility, allowing you to participate from any device, ensuring you never miss out on a club meeting
              or an impromptu chat.
            </p>
          </div>
          <div className="card">
            <i className="fa-solid fa-book"></i>
            <h3>Grow Your Literary Knowledge</h3>
            <p>
              Expand your understanding of literature with curated content about authors, enrich your knowledge and become a part of the literary
              world.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
