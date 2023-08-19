from flask import Flask, jsonify, request
from pexels_api import API
import tqdm

app = Flask(__name__)

PEXELS_API_KEY = "jfUDxkJWby91Hbx0NSab5CI1HC6ca6B9tXwTKvKBMQsPQLiTAPWNJB0O"
api = API(PEXELS_API_KEY)
PAGE_LIMIT = 11
RESULTS_PER_PAGE = 10

@app.route('/api/photos', methods=['GET'])
def get_photos():
    
    photos_dict = {}
    page = 1
    counter = 0

    value = request.args.get('query')
    # print(f"query-> {value}")
    query = value
    
    while page <= PAGE_LIMIT:
        api.search(query, page=page, results_per_page=RESULTS_PER_PAGE)
        photos = api.get_entries()
        for photo in tqdm.tqdm(photos):
            photos_dict[photo.id] = vars(photo)['_Photo__photo']
            counter += 1
            if not api.has_next_page:
                break
            page += 1
    
    response = {
        'total_photos': counter,
        'photos': photos_dict
    }
    # print("    ")
    print(f"--------------------{value} photos api is hitted--------------------")
    # print("    ")
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
