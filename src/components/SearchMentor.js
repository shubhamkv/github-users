import React, { useState } from "react";
import styled from "styled-components";

function GitHubProfileSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [profileResults, setProfileResults] = useState([]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      alert("Please enter a search query.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=language:${searchQuery}&sort=followers&order=desc`
      );
      const data = await response.json();

      const users = data.items.slice(0, 5); // Get top 5 users
      setProfileResults(users);
    } catch (error) {
      console.error("Error fetching data from GitHub API:", error);
      alert("An error occurred while fetching data. Please try again later.");
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <h3>Search your favourite Tech Stack</h3>
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            placeholder="Enter a tech stack"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
        <div className="profile-results">
          {profileResults.map((user) => (
            <div key={user.id} className="profile-card">
              <h2>{user.login}</h2>
              <img src={user.avatar_url} alt={user.login} width="100" />
              <br></br>
              <p>
                Profile URL:{" "}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.html_url}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }

  .search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .search-input {
    padding: 10px;
    margin-right: 10px;
  }

  .search-button {
    padding: 10px 20px;
  }

  .profile-results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .profile-card {
    width: 300px;
    margin: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    text-align: center;
  }
`;

export default GitHubProfileSearch;
