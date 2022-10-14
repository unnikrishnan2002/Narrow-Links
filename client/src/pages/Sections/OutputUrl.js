import React from "react";
export function OutputUrl({ finalUrl, handleCopyClick, loading }) {
  return (
    <div className="input-group mb-3 narrowurl ">
      <input
        aria-label="Shortened link will appear here"
        id="inputUrl"
        type="text"
        className="form-control"
        placeholder="Shortened link will appear here"
        value={finalUrl}
        readOnly
      />
      {loading ? (
        <button
          className="btn btn-success"
          aria-label="Copying Link"
          type="button"
          disabled
        >
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Loading...</span>
        </button>
      ) : (
        <button
          data-testid="Copy"
          aria-label="Copy Link"
          className="btn btn-success"
          onClick={handleCopyClick}
          type="button"
        >
          Copy
        </button>
      )}
    </div>
  );
}
