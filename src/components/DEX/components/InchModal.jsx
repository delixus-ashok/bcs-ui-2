import React from "react";

function InchModal({
  open,
  onClose,
  setToken,
  tokenList,
  term,
  searchkeyword,
}) {
  if (!open) return null;

  const getSearchTerm = (e) => {
    searchkeyword(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          style={{
            width: "-webkit-fill-available",
            border: "1",
            borderRadius: "10px",
            padding: "5px 10px",
            fontSize: "17px",
            margin: "10px",
          }}
          type="text"
          id="searchBar"
          className="prompt"
          placeholder="Search here"
          value={term}
          onChange={(e) => getSearchTerm(e)}
        />
      </div>

      <div style={{ overflow: "auto", height: "500px" }}>
        {tokenList.length == 0 ? (
          <div
            style={{
              padding: "5px 20px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span>data not available </span>
          </div>
        ) : (
          Object.keys(tokenList).map((token, index) => (
            <div
              style={{
                padding: "5px 20px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setToken(tokenList[token]);
                searchkeyword(" ");
                onClose();
              }}
              key={index}
            >
              <img
                style={{
                  height: "32px",
                  width: "32px",
                  marginRight: "20px",
                }}
                src={tokenList[token].logoURI}
                alt="noLogo"
              />
              <div>
                <h4>{tokenList[token].name}</h4>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "14px",
                  }}
                >
                  {tokenList[token].symbol}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default InchModal;
