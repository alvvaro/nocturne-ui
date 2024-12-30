export const fetchUserPlaylists = async (
  accessToken,
  setPlaylists,
  updateGradientColors,
  handleError
) => {
  try {
    const response = await fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      const validPlaylists = data.items.filter((item) => item && item.id);
      if (validPlaylists.length > 0) {
        const imageUrl = validPlaylists[0].images?.[0]?.url;
        if (imageUrl) {
          localStorage.setItem("libraryImage", imageUrl);
          updateGradientColors(imageUrl, "library");
        }
      }
      setPlaylists(validPlaylists);
    } else {
      console.error("Error fetching user playlists:", response.status);
    }
  } catch (error) {
    console.error("Error fetching user playlists:", error.message);
  }
};

export const fetchLikedSongs = async (accessToken, handleError) => {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/tracks?limit=1",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return {
        id: "liked-songs",
        name: "Liked Songs",
        images: [{ url: "/images/liked-songs.webp" }],
        tracks: { total: data.total },
        external_urls: {
          spotify: "https://open.spotify.com/collection/tracks",
        },
        type: "liked-songs",
      };
    } else {
      handleError("FETCH_LIKED_SONGS_ERROR", response.status.toString());
      return null;
    }
  } catch (error) {
    handleError("FETCH_LIKED_SONGS_ERROR", error.message);
    return null;
  }
};
