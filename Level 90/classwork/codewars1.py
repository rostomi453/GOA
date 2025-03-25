def comfortable_word(word):
    left_hand = set("qwertasdfgzxcvb")
    right_hand = set("yuiophjklnm")

    for i in range(len(word) - 1):
        if (word[i] in left_hand and word[i + 1] in left_hand) or \
           (word[i] in right_hand and word[i + 1] in right_hand):
            return False
    return True
