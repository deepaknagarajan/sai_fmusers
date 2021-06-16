# sreesaibaba

import pymongo


class Db:
    def __init__(self):
        """
        """
        self.client = pymongo.MongoClient('mongodb://localhost:27017')
        self.db = self.client.data
        self.fm_users = self.db.fmusers

    def view_fm_users(self):
        """
        """
        results = []
        cur = self.fm_users.find({}, {'_id': 0}).sort([('_id', -1)])

        for r in cur:
            results.append(r)
        print(results)

        return results[0]
